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
import { StudentCompleteDetails } from '../../../../models/student.model';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.scss',
})
export class StudentRegistrationComponent {
  @Input() id!: string;
  genderOptions = [
    'Male',
    'Female',
    'Other'
  ];

  loading: boolean = false;
  studentDemog!: FormGroup;
  isIECFound: boolean = false;
  maxDate: Date = new Date();

  formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit() {

    if (!this.id) {
      this.studentService.clearStudentDetails();
    }

    if (!!this.id) {
      this.studentService.getStudentId(this.id).subscribe({
        next: (res) => {
          this.loading = false;
          console.log(res);
          this.patchValues();
          this.formSubmitted = true
        },
        error: (err) => {
          this.loading = false;
        },
      });
    }

    this.patchValues();


  }

  patchValues() {
    this.studentDemog = this.formBuilder.group({

      firstName: [this.studentService.student.firstName, Validators.required],
      lastName: [this.studentService.student.lastName, Validators.required],
      phoneNumber: [this.studentService.student.phoneNumber, [Validators.required, Validators.pattern(/^\d+$/)]],
      whatsappNumber: [
        this.studentService.student.whatsappNumber,
        [Validators.required, Validators.pattern(/^\d+$/)],
      ],
      importerEmailId: [this.studentService.student.email, [Validators.required, Validators.email]],
      studentid: [this.studentService.student.id, [Validators.required, Validators.pattern(/^\d+$/)]],
      birthDate: [this.studentService.student.dob, Validators.required],
      selectedGender: [this.studentService.student.gender, Validators.required],
      checked: [false],
      ResidentialAddress: [this.studentService.student.address],

    });
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
      studentId: this.generateUniqueAndReadableStudentID(this.f['firstName'].value),
      dob: new Date(this.formatDate(this.f['birthDate'].value)),
      gender: this.f['selectedGender'].value.label,
      address: this.f['ResidentialAddress'].value,
      status: this.f['checked'].value,
    };

    //studentData);

    const student: Partial<StudentCompleteDetails> = {
      firstName: this.f['firstName'].value,
      lastName: this.f['lastName'].value,
      phoneNumber: parseInt(this.f['phoneNumber'].value),
      whatsappNumber: parseInt(this.f['whatsappNumber'].value),
      email: this.f['importerEmailId'].value,
      id: this.generateUniqueAndReadableStudentID(this.f['firstName'].value),
      dob: new Date(this.formatDate(this.f['birthDate'].value)),
      gender: this.f['selectedGender'].value,
      address: this.f['ResidentialAddress'].value,
    }

    this.studentService.saveStudentDetails(student);

    this.loading = false;

    this.formSubmitted = true

    this.Course();

  }

  resetForm() {
    this.studentDemog.reset();
    //'Form reset');
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

  formatDate(date: Date): Date {
    return date
  }

  generateUniqueAndReadableStudentID(name: string) {
    // Convert the name to lowercase and remove spaces for consistency
    const formattedName = name.toLowerCase().replace(/ /g, '');

    // Create a unique part by combining the first letter of the name,
    // the current year, and a random number
    const uniquePart = formattedName[0] + new Date().getFullYear() + Math.floor(Math.random() * 1000);

    // Ensure the unique part is always 5 characters long by padding with zeros if necessary
    const paddedUniquePart = uniquePart.padEnd(5, '0');

    // Return the formatted name followed by the unique part
    return `${formattedName}-${paddedUniquePart}`;
  }

}
