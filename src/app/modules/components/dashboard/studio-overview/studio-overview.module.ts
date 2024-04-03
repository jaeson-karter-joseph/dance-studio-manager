import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioOverviewRoutingModule } from './studio-overview-routing.module';
import { StudioOverviewComponent } from './studio-overview.component';


@NgModule({
  declarations: [
    StudioOverviewComponent
  ],
  imports: [
    CommonModule,
    StudioOverviewRoutingModule
  ]
})
export class StudioOverviewModule { }
