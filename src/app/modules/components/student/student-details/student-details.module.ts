import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailsRoutingModule } from './student-details-routing.module';
import { StudentDetailsComponent } from './student-details.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    StudentDetailsRoutingModule,
    ToastModule
  ]
})
export class StudentDetailsModule { }
