import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerDetailsRoutingModule } from './trainer-details-routing.module';
import { TrainerDetailsComponent } from './trainer-details.component';


@NgModule({
  declarations: [
    TrainerDetailsComponent
  ],
  imports: [
    CommonModule,
    TrainerDetailsRoutingModule
  ]
})
export class TrainerDetailsModule { }
