import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from 'express';
import { StudentService } from '../../student-registration/services/student.service';
import { StudentAdditionalInfo } from '../../student-registration/models/request.model';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.scss'
})
export class StudentInfoComponent {
  @Input() id!: string;
  loading: boolean = false;
  iecForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.iecForm = this.formBuilder.group({
      anySpecialRequest: [null, Validators.required],
      notes: [null, Validators.required],
    });

    if (this.id) {
      this.studentService.getStudentId(this.id).subscribe({
        next: (res) => {
          this.loading = false;
          console.log(res);
          this.iecForm.patchValue(res);
        },
        error: (err) => {
          this.loading = false;
          console.log(err);
        },
      });
    }
  }

  load() {
    this.loading = true;

    const studentAdditionalInfo: StudentAdditionalInfo = {
      anySpecialRequest: this.f['coursesEnrolled'].value,
      notes: this.f['sessionTimes'].value,
    };

    console.log(studentAdditionalInfo);

    this.studentService.saveStudent(studentAdditionalInfo).subscribe({
      next: (res) => {
        this.loading = false;
        console.log(res);
      },
      error: (err) => {
        this.loading = false;
        console.log(err);
      },
    });
  }

  resetForm() {
    this.iecForm.reset();
    console.log('Form reset');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.iecForm.controls;
  }

  checkError = (controlName: string, errorName: string) => {
    return (
      this.iecForm.controls[controlName].hasError(errorName) &&
      this.iecForm.controls[controlName].dirty
    );
  };
}
