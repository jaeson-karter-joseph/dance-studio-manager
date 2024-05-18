import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRegistrationRoutingModule } from './trainer-registration-routing.module';
import { TrainerRegistrationComponent } from './trainer-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgprimeModule } from '../../../shared/ngprime/ngprime.module';


@NgModule({
  declarations: [
    TrainerRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgprimeModule,
    TrainerRegistrationRoutingModule
  ]
})
export class TrainerRegistrationModule { }
