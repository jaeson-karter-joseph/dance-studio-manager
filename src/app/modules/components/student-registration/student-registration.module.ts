import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRegistrationRoutingModule } from './student-registration-routing.module';
import { StudentRegistrationComponent } from './student-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgprimeModule } from '../../shared/ngprime/ngprime.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StudentRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgprimeModule,
    StudentRegistrationRoutingModule,
    HttpClientModule
  ]
})
export class StudentRegistrationModule { }
