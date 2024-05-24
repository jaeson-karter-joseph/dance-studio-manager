import { StudentInfoComponent } from './student-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: StudentInfoComponent },
{ path: ':id', component: StudentInfoComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentInfoRoutingModule { }
