import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCourseRoutingModule } from './student-course-routing.module'
import {StudentCourseComponent } from './student-course.component'
import { NgprimeModule } from '../../../shared/ngprime/ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StudentCourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgprimeModule,
    StudentCourseRoutingModule,
    HttpClientModule
  ]
})
export class StudentCourseModule { }


