import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgprimeModule } from '../../../shared/ngprime/ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentInfoComponent } from './student-info.component';
import { StudentInfoRoutingModule } from './student-info-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StudentInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgprimeModule,
    StudentInfoRoutingModule,
    HttpClientModule
  ]
})
export class StudentInfoModule { }


