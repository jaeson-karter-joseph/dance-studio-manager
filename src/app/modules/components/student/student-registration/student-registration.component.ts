import { StudentService } from './../../student-registration/services/student.service';
import { StudentPaymentComponent } from './../student-payment/student-payment.component';
import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../student-registration/models/request.model';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.scss',
})
export class StudentRegistrationComponent {
  @Input() id!: string;
  genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];
  loading: boolean = false;
  studentDemog!: FormGroup;
  isIECFound: boolean = false;
  maxDate : Date = new Date();

  formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.studentDemog = this.formBuilder.group({

      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      whatsappNumber: [
        null,
        [Validators.required, Validators.pattern(/^\d+$/)],
      ],
      importerEmailId: [null, [Validators.required, Validators.email]],
      studentid: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      birthDate: [null, Validators.required],
      selectedGender: ['', Validators.required],
      checked: [false],
      ResidentialAddress: [''],
    });

    if(!!this.id){
      this.studentService.getStudentId(this.id).subscribe({
        next: (res) => {
          this.loading = false;
          console.log(res);

          this.studentDemog.patchValue;
        },
        error: (err) => {
          this.loading = false;
          console.log(err);
        },
      });
    }
  }

  onUpload(event: any) {
    const file = event.files[0];
    this.studentDemog.get('file')?.setValue(file);
  }

  Course() {
    this.router.navigate(['/student/studentCourse']);
  }

  load() {
    this.loading = true;

    const studentData: Student = {
      firstName: this.f['firstName'].value,
      lastName: this.f['lastName'].value,
      mobile: parseInt(this.f['phoneNumber'].value),
      whatsappNo: parseInt(this.f['whatsappNumber'].value),
      email: this.f['importerEmailId'].value,
      studentId: this.f['studentid'].value,
      dob: this.formatDate(this.f['birthDate'].value),
      gender: this.f['selectedGender'].value.label,
      address: this.f['ResidentialAddress'].value,
      status: this.f['checked'].value,
    };

    console.log(studentData);

    this.studentService.saveStudent(studentData).subscribe({
      next: (res) => {
        this.loading = false;
        console.log(res);
      },
    });
  }

  resetForm() {
    this.studentDemog.reset();
    console.log('Form reset');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.studentDemog.controls;
  }

  checkError = (controlName: string, errorName: string) => {
    return (
      this.studentDemog.controls[controlName].hasError(errorName) &&
      this.studentDemog.controls[controlName].dirty
    );
  };

  searchIEC() {
    this.isIECFound = true;
  }

  formatDate(date: Date): string {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
      '0' + date.getDate()
    ).slice(-2)}`;
  }
}
