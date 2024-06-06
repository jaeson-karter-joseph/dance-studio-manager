import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRoutingModule } from './trainer-routing.module';
import { NgprimeModule } from '../../shared/ngprime/ngprime.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    NgprimeModule,
    ReactiveFormsModule

  ]
})
export class TrainerModule { }
