import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailsRoutingModule } from './student-details-routing.module';
import { StudentDetailsComponent } from './student-details.component';
import { NgprimeModule } from '../../../shared/ngprime/ngprime.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    StudentDetailsRoutingModule,
    NgprimeModule,
    FormsModule
  ]
})
export class StudentDetailsModule { }
