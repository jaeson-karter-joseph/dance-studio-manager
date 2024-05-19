import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Payment } from '../../student-registration/models/request.model';
import { StudentService } from '../../student-registration/services/student.service';

@Component({
  selector: 'app-student-payment',
  templateUrl: './student-payment.component.html',
  styleUrl: './student-payment.component.scss',
})
export class StudentPaymentComponent {
  category = [
    { label: 'Adult', value: 'Adult' },
    { label: 'Kids', value: 'Kids' },
  ];
  payment = [
    { name: 'Cash' },
    { name: 'Credit Card' },
    { name: 'Debit Card' },
    { name: 'Net Banking' },
    { name: 'Bank Transfer' },
  ];
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
      selectedCategory: [null, Validators.required],
      joiningDate: [null, Validators.required],
      selectedPayment: [null, Validators.required],
      paymentDate: [null, Validators.required],
      validTill: [null, Validators.required],
      classesCompleted: [null, [Validators.required, Validators.min(0)]],
      classesRemaining: [null, [Validators.required, Validators.min(0)]],
      selectedGender: ['', Validators.required],
      file: [null, Validators.required],
      ResidentialAddress: [''],
      checked: [false],
    });
  }

  onUpload(event: any) {
    const file = event.files[0];
    this.iecForm.get('file')?.setValue(file);
  }

  edit() {}

  load() {
    this.loading = true;

    const paymentData: Payment = {
      paymentMode: this.f['selectedPayment'].value.label,
      paymentDate: this.formatDate(this.f['paymentDate'].value),
      category: this.f['selectedCategory'].value.label,
      doj: this.formatDate(this.f['joiningDate'].value),
      validityDate: this.formatDate(this.f['validTill'].value),
      classCompleted: this.f['classesCompleted'].value,
      classRemaining: this.f['classesRemaining'].value,
      studentId: this.f['studentid'].value,
    };

    console.log(paymentData);

    this.studentService.savePayment(paymentData).subscribe({
      next: (res) => {
        this.loading = false;
        console.log(res);
      },
    });
  }

  formatDate(date: Date): string {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
      '0' + date.getDate()
    ).slice(-2)}`;
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
}
