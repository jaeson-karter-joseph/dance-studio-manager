import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerRegistrationComponent } from './trainer-registration/trainer-registration.component';

const routes: Routes = [{ path: 'trainerRegistration', component: TrainerRegistrationComponent }, { path: 'trainer-registration', loadChildren: () => import('./trainer-registration/trainer-registration.module').then(m => m.TrainerRegistrationModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
