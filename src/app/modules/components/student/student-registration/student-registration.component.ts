import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { StudentService } from './services/student.service';
import { Student } from './models/request.model';

interface dropDown {
  label: string;
  value: string
}

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.scss'
})
export class StudentRegistrationComponent {
  category: dropDown[] = [
    { label: 'Adult', value: 'Adult' },
    { label: 'Kids', value: 'Kids' },
  ];
  payment: dropDown[] = [
    { value: 'Cash', label: 'Cash' },
    { value: 'Credit', label: 'Credit Card' },
    { value: 'Debit', label: 'Debit Card' },
    { value: 'Net', label: 'Net Banking' },
    { value: 'Bank', label: 'Bank Transfer' },
  ];
  genderOptions: dropDown[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
  ];
  loading: boolean = false;
  iecForm !: FormGroup;
  isIECFound: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.iecForm = this.formBuilder.group({
      iceNumber: new FormControl<string | null>("IEC1234", [Validators.required]),
      firstName: new FormControl<string | null>("IEC1234", [Validators.required]),
      lastName: new FormControl<string | null>("IEC1234", [Validators.required]),
      phoneNumber: new FormControl<string | null>("1234", [Validators.required]),
      whatsappNumber: new FormControl<string | null>("1234", [Validators.required]),
      importerEmailId: new FormControl<string | null>("john.doe@example.com", [Validators.required]),
      instafbID: new FormControl<string | null>("IEC1234", [Validators.required]),
      studentid: new FormControl<string | null>("1234", [Validators.required]),
      emidpassno: new FormControl<string | null>("IEC1234", [Validators.required]),
      notehealthissue: new FormControl<string | null>("IEC1234", [Validators.required]),
      birthDate: new FormControl<Date | null>(new Date(), [Validators.required]),
      selectedCategory: new FormControl<dropDown | null>({ label: 'Adult', value: 'Adult' }, [Validators.required]),
      joiningDate: new FormControl<Date | null>(new Date(), [Validators.required]),
      selectedPayment: new FormControl<dropDown | null>({ value: 'Cash', label: 'Cash' }, [Validators.required]),
      paymentDate: new FormControl<Date | null>(new Date(), [Validators.required]),
      validTill: new FormControl<Date | null>(new Date(), [Validators.required]),
      classesCompleted: new FormControl<number | null>(2, [Validators.required]),
      classesRemaining: new FormControl<number | null>(50, [Validators.required]),
      selectedGender: new FormControl<dropDown | null>({ label: 'Male', value: 'male' }, [Validators.required]),
      file: new FormControl<string | null>(null, [Validators.required]),
      ResidentialAddress: new FormControl<string | null>("IEC1234", [Validators.required]),
      checked: [false],
    })
  }


  onUpload(event: any) {
    const file = event.files[0];
    this.iecForm.get('file')?.setValue(file);
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
      paymentMode: this.f['selectedPayment'].value.label,
      paymentDate: this.formatDate(this.f['paymentDate'].value),
      category: this.f['selectedCategory'].value.label,
      doj: this.formatDate(this.f['joiningDate'].value),
      validityDate: this.formatDate(this.f['validTill'].value),
      classCompleted: this.f['classesCompleted'].value,
      classRemaining: this.f['classesRemaining'].value,
      gender: this.f['selectedGender'].value.label,
      image: this.f['file'].value,
      address: this.f['ResidentialAddress'].value,
      status: this.f['checked'].value
    };

    console.log(studentData);

    this.studentService.saveStudent(studentData).subscribe({
      next: res => {
        console.log(res);
      }
    })


  }

  resetForm() {
    this.iecForm.reset();
    console.log('Form reset');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.iecForm.controls;
  }

  checkError = (controlName: string, errorName: string) => {
    return this.iecForm.controls[controlName].hasError(errorName) && this.iecForm.controls[controlName].dirty;
  }

  searchIEC() {
    this.isIECFound = true;
  }

  formatDate(date: Date): string {
    // Function to format date to 'YYYY-MM-DD' format
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
  }

}

