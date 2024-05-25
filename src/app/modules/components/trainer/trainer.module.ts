import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRoutingModule } from './trainer-routing.module';
import { SharedModule } from 'primeng/api';
import { NgprimeModule } from '../../shared/ngprime/ngprime.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    SharedModule,
    NgprimeModule
  ]
})
export class TrainerModule { }
