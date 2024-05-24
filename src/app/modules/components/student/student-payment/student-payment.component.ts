import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import {  StudentPayment } from '../../student-registration/models/request.model';
import { StudentService } from '../../student-registration/services/student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-payment',
  templateUrl: './student-payment.component.html',
  styleUrls: ['./student-payment.component.scss'],
})
export class StudentPaymentComponent {
  
  @Input() id!: string;
  paymentMethods = [
    { name: 'Cash' },
    { name: 'Credit Card' },
    { name: 'Debit Card' },
    { name: 'Net Banking' },
    { name: 'Bank Transfer' },
  ];
  loading: boolean = false;
  studentPayment!: FormGroup;
  isIECFound: boolean = false;
  isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router : Router
  ) {}

  ngOnInit() {
    this.studentPayment = this.formBuilder.group({
      totalFees: [null, Validators.required],
      vat: [null, Validators.required],
      selectedPayment: [null, Validators.required],
      paymentDate: [null, Validators.required],
    });
    
  }

  AnyInfo() {
    this.router.navigate(['/student/studentAdditionalInfo']);
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
  }

  formatDate(date: Date): string {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
  }

  resetForm() {
    this.studentPayment.reset();
    console.log('Form reset');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.studentPayment.controls;
  }

  checkError = (controlName: string, errorName: string) => {
    return (
      this.studentPayment.controls[controlName].hasError(errorName) &&
      this.studentPayment.controls[controlName].dirty
    );
  };

  searchIEC() {
    this.isIECFound = true;
  }
}
