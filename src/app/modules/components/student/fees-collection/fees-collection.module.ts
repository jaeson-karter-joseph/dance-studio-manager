import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesCollectionRoutingModule } from './fees-collection-routing.module';
import { FeesCollectionComponent } from './fees-collection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgprimeModule } from '../../../shared/ngprime/ngprime.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FeesCollectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgprimeModule,
    FeesCollectionRoutingModule,
    HttpClientModule

  ]
})
export class FeesCollectionModule { }
