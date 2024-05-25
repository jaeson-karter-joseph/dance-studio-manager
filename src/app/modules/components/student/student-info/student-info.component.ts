import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { StudentService } from '../../student-registration/services/student.service';
import { StudentAdditionalInfo } from '../../student-registration/models/request.model';
import { Router } from '@angular/router';
import { StudentCompleteDetails } from '../../../../models/student.model';

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
      anySpecialRequest: [this.studentService.student.addNotes],
    });

    if (this.id) {
      this.studentService.getStudentId(this.id).subscribe({
        next: (res) => {
          this.loading = false;
          //res);
          this.iecForm.patchValue(res);
        },
        error: (err) => {
          this.loading = false;
          //err);
        },
      });
    }
  }

  load() {
    this.loading = true;

    const studentAdditionalInfo: StudentAdditionalInfo = {
      anySpecialRequest: this.f['anySpecialRequest'].value,
    };

    const student : Partial<StudentCompleteDetails> = {
      addNotes: this.f['anySpecialRequest'].value,
    }

    this.studentService.saveStudentDetails(student);

    this.loading = false;


  }

  resetForm() {
    this.iecForm.reset();
    //'Form reset');
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

  onBack(){
    this.router.navigate(['/student/studentCourse']);
  }

}
