import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentPaymentComponent } from './student-payment.component';

const routes: Routes = [{ path: '', component: StudentPaymentComponent },
{ path: ':id', component: StudentPaymentComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentPaymentRoutingModule { }
