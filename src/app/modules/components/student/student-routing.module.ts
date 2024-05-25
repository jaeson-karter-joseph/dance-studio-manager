import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseManagementComponent } from './courseManagment/course-management/course-management.component';
import { AttendanceManagementComponent } from './courseManagment/attendance-management/attendance-management.component';


const routes: Routes = [
  { path: 'studentRegistration', loadChildren: () => import('./student-registration/student-registration.module').then(m => m.StudentRegistrationModule) },
  { path: 'studentDetails', loadChildren: () => import('./student-details/student-details.module').then(m => m.StudentDetailsModule) },
  { path: 'studentPayment', loadChildren: () => import('./student-payment/student-payment.module').then(m => m.StudentPaymentModule) },
  { path: 'studentCourse', loadChildren: () => import('./student-course/student-course.module').then(m => m.StudentCourseModule) },
  { path: 'studentAdditionalInfo', loadChildren: () => import('./student-info/student-info.module').then(m => m.StudentInfoModule) },
  { path: 'feesCollection', loadChildren: () => import('./fees-collection/fees-collection.module').then(m => m.FeesCollectionModule) },
  //routing for CM
  { path: 'course', component : CourseManagementComponent},
  { path: 'attandace', component : AttendanceManagementComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
