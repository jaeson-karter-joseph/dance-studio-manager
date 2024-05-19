import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentPaymentRoutingModule } from './student-payment-routing.module';
import { StudentPaymentComponent } from './student-payment.component';
import { NgprimeModule } from '../../../shared/ngprime/ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentPaymentComponent
  ],
  imports: [
    CommonModule,
    StudentPaymentRoutingModule,
    NgprimeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentPaymentModule { }
