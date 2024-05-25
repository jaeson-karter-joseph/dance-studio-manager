import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { CourseManagementComponent } from './courseManagment/course-management/course-management.component';
import { AttendanceManagementComponent } from './courseManagment/attendance-management/attendance-management.component';



@NgModule({
  declarations: [


    CourseManagementComponent,
    AttendanceManagementComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }


