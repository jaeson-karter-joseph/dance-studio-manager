import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryCalculationRoutingModule } from './salary-calculation-routing.module';
import { SalaryCalculationComponent } from './salary-calculation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgprimeModule } from '../../../shared/ngprime/ngprime.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SalaryCalculationComponent
  ],
  imports: [
    CommonModule,
    SalaryCalculationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgprimeModule,
    HttpClientModule

  ]
})
export class SalaryCalculationModule { }
