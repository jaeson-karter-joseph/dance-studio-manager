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
  iecForm!: FormGroup;
  isIECFound: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.iecForm = this.formBuilder.group({
      iceNumber: new FormControl<string | null>('IEC1234', [
        Validators.required,
      ]),
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      whatsappNumber: [
        null,
        [Validators.required, Validators.pattern(/^\d+$/)],
      ],
      importerEmailId: [null, [Validators.required, Validators.email]],
      instafbID: [null, Validators.required],
      studentid: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      emidpassno: [null, Validators.required],
      notehealthissue: [null, Validators.required],
      birthDate: [null, Validators.required],
      selectedGender: ['', Validators.required],
      checked: [false],
      file: [null, Validators.required],
      ResidentialAddress: [''],
    });
    if(!!this.id){
      this.studentService.getStudentId(this.id).subscribe({
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
  }

  onUpload(event: any) {
    const file = event.files[0];
    this.iecForm.get('file')?.setValue(file);
  }

  Payment() {
    this.router.navigate(['/student/studentPayment']);
  }

  load() {
    this.loading = true;

    const studentData: Student = {
      firstName: this.f['firstName'].value,
      lastName: this.f['lastName'].value,
      mobile: parseInt(this.f['phoneNumber'].value),
      whatsappNo: parseInt(this.f['whatsappNumber'].value),
      email: this.f['importerEmailId'].value,
      socialMedia: this.f['instafbID'].value,
      studentId: this.f['studentid'].value,
      emiritesOrPassportNo: this.f['emidpassno'].value,
      healthIssue: this.f['notehealthissue'].value,
      dob: this.formatDate(this.f['birthDate'].value),
      gender: this.f['selectedGender'].value.label,
      image: this.f['file'].value,
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

  searchIEC() {
    this.isIECFound = true;
  }

  formatDate(date: Date): string {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
      '0' + date.getDate()
    ).slice(-2)}`;
  }
}
