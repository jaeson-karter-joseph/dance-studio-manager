import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { StudentPayment } from '../../student-registration/models/request.model';
import { StudentService } from '../../student-registration/services/student.service';
import { Router } from '@angular/router';
import { StudentCompleteDetails } from '../../../../models/student.model';


@Component({
  selector: 'app-student-payment',
  templateUrl: './student-payment.component.html',
  styleUrls: ['./student-payment.component.scss'],
})
export class StudentPaymentComponent {

  @Input() id!: string;
  paymentMethods = [
    'Cash',
    'Credit Card',
    'Debit Card',
    'Net Banking',
    'Bank Transfer',
  ];
  loading: boolean = false;
  studentPayment!: FormGroup;
  isIECFound: boolean = false;
  isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentPayment = this.formBuilder.group({
      totalFees: [this.studentService.student.fees, Validators.required],
      vat: [this.studentService.student.vat, Validators.required],
      selectedPayment: [this.studentService.student.paymentMode, Validators.required],
      paymentDate: [this.studentService.student.paymentDate, Validators.required],
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

    const student: Partial<StudentCompleteDetails> = {
      fees: this.f['totalFees'].value,
      vat: this.f['vat'].value,
      paymentMode: this.f['selectedPayment'].value.name,
      paymentDate: new Date(this.formatDate(this.f['paymentDate'].value)),
    }

    this.studentService.saveStudentDetails(student);

    this.isFormSubmitted = true;
    this.loading = false;
    this.AnyInfo()


  }

  formatDate(date: Date): string {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
  }

  resetForm() {
    this.studentPayment.reset();
    //'Form reset');
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

  onBack() {
    this.router.navigate(['/student/studentCourse']);
  }

}
