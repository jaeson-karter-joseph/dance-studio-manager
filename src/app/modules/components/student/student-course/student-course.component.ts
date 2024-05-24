import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { StudentService } from '../../student-registration/services/student.service';
import { StudentCourse } from '../../student-registration/models/request.model';

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrl: './student-course.component.scss'
})
export class StudentCourseComponent {
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
      coursesEnrolled: [null, Validators.required],
      sessionTimes: [null, Validators.required],
      instructorTrainer: [null, Validators.required],
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

  Payment() {
    this.router.navigate(['/student/studentPayment']);
  }

  load() {
    this.loading = true;

    const studentCourseData: StudentCourse = {
      coursesEnrolled: this.f['coursesEnrolled'].value,
      sessionTimes: this.f['sessionTimes'].value,
      instructorTrainer: this.f['instructorTrainer'].value,
    };

    console.log(studentCourseData);

    this.studentService.saveStudent(studentCourseData).subscribe({
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
