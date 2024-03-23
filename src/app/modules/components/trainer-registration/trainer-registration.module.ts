import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRegistrationRoutingModule } from './trainer-registration-routing.module';
import { TrainerRegistrationComponent } from './trainer-registration.component';


@NgModule({
  declarations: [
    TrainerRegistrationComponent
  ],
  imports: [
    CommonModule,
    TrainerRegistrationRoutingModule
  ]
})
export class TrainerRegistrationModule { }
