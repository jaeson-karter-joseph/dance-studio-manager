import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { CourseManagementComponent } from './courseManagment/course-management/course-management.component';
import { AttendanceManagementComponent } from './courseManagment/attendance-management/attendance-management.component';
import { FeesCollectionComponent } from './courseManagment/fees-collection/fees-collection.component';
import { NgprimeModule } from '../../shared/ngprime/ngprime.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    FeesCollectionComponent,
    CourseManagementComponent,
    AttendanceManagementComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NgprimeModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }


