import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { StudentService } from '../../student-registration/services/student.service';
import { Student, StudentAdditionalInfo } from '../../student-registration/models/request.model';
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

  registerStudent(){
    this.loading = true;

    const student : Student = {
      firstName : this.studentService.student.firstName,
      lastName : this.studentService.student.lastName,
      mobile : this.studentService.student.phoneNumber as number,
      whatsappNo : this.studentService.student.whatsappNumber as number,
      email : this.studentService.student.email,
      studentId : this.studentService.student.id as string,
      gender : this.studentService.student.gender,
      address : this.studentService.student.address,
      phoneNumber : this.studentService.student.phoneNumber as number,
      whatsappNumber : this.studentService.student.whatsappNumber as number,
      id : this.studentService.student.id as string,
      dob : this.studentService.student.dob,
      couresEnrolled : this.studentService.student.couresEnrolled,
      classDate : this.studentService.student.classDate,
      trainer : this.studentService.student.trainer,
      fees : this.studentService.student.fees,
      vat : this.studentService.student.vat,
      paymentMode : this.studentService.student.paymentMode,
      paymentDate : this.studentService.student.paymentDate,
      status : true,
      addNotes : this.studentService.student.addNotes
    }

    this.studentService.saveStudent(student).subscribe({
      next : res =>{
        console.log(res);
        this.loading = false;
      },
      error : (err) => {
        console.error(err);
      }
    })
  }

}
