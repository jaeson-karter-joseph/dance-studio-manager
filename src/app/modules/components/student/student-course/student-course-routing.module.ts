import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCourseComponent } from './student-course.component'

const routes: Routes = [{ path: '', component: StudentCourseComponent },
{ path: ':id', component: StudentCourseComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentCourseRoutingModule { }
