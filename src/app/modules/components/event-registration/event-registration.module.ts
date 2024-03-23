import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRegistrationRoutingModule } from './event-registration-routing.module';
import { EventRegistrationComponent } from './event-registration.component';


@NgModule({
  declarations: [
    EventRegistrationComponent
  ],
  imports: [
    CommonModule,
    EventRegistrationRoutingModule
  ]
})
export class EventRegistrationModule { }
