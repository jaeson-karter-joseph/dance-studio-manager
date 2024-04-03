import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';


const routes: Routes = [
  { path: 'studentRegistration', component: StudentRegistrationComponent }, { path: 'student-registration', loadChildren: () => import('./student-registration/student-registration.module').then(m => m.StudentRegistrationModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
