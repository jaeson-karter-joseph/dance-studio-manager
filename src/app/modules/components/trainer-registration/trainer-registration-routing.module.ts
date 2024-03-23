import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerRegistrationComponent } from './trainer-registration.component';

const routes: Routes = [{ path: '', component: TrainerRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRegistrationRoutingModule { }
