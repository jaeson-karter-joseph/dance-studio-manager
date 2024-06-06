import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerDetailsComponent } from './trainer-details.component';
import { NgprimeModule } from '../../../shared/ngprime/ngprime.module';
import { FormsModule } from '@angular/forms';
import { TrainerDetailsRoutingModule } from './trainer-details-routing.module';


@NgModule({
  declarations: [
    TrainerDetailsComponent
  ],
  imports: [
    CommonModule,
    NgprimeModule,
    FormsModule,
    TrainerDetailsRoutingModule,
  ]
})
export class TrainerDetailsModule { }


