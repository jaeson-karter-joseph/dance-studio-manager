import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import {  StudentPayment } from '../../student-registration/models/request.model';
import { StudentService } from '../../student-registration/services/student.service';

@Component({
  selector: 'app-student-payment',
  templateUrl: './student-payment.component.html',
  styleUrls: ['./student-payment.component.scss'],
})
export class StudentPaymentComponent {
  paymentMethods = [
    { name: 'Cash' },
    { name: 'Credit Card' },
    { name: 'Debit Card' },
    { name: 'Net Banking' },
    { name: 'Bank Transfer' },
  ];
  loading: boolean = false;
  iecForm!: FormGroup;
  isIECFound: boolean = false;
  router: any;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.iecForm = this.formBuilder.group({
      iceNumber: new FormControl<string | null>('', [Validators.required]),
      totalFees: [null, Validators.required],
      vat: [null, Validators.required],
      selectedPayment: [null, Validators.required],
      paymentDate: [null, Validators.required],
    });
  }

  AnyInfo() {
    this.router.navigate(['/student/studentInfo']);
  }
  load() {
    this.loading = true;

    const StudentPaymentData: StudentPayment = {
      totalFees: this.f['totalFees'].value,
      vat: this.f['vat'].value,
      selectedPayment: this.f['selectedPayment'].value.name,
      paymentDate: this.formatDate(this.f['paymentDate'].value),
    };

    console.log(StudentPaymentData);

    this.studentService.savePayment(StudentPaymentData).subscribe({
      next: (res) => {
        this.loading = false;
        console.log(res);
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
      },
    });
  }

  formatDate(date: Date): string {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
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
