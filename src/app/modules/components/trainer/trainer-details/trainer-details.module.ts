import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerDetailsRoutingModule } from './trainer-details-routing.module';
import { TrainerDetailsComponent } from './trainer-details.component';
import { NgprimeModule } from '../../../shared/ngprime/ngprime.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TrainerDetailsComponent
  ],
  imports: [
    CommonModule,
    TrainerDetailsRoutingModule,
    NgprimeModule,
    FormsModule
  ]
})
export class TrainerDetailsModule { }


