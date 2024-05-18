import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'studentRegistration', loadChildren: () => import('./student-registration/student-registration.module').then(m => m.StudentRegistrationModule) },
  { path: 'studentDetails', loadChildren: () => import('./student-details/student-details.module').then(m => m.StudentDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
