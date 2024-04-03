import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventRegistrationComponent } from './event-registration/event-registration.component';


const routes: Routes = [{ path: 'eventRegistration', component: EventRegistrationComponent }, { path: 'eventRegistration', loadChildren: () => import('./event-registration/event-registration.module').then(m => m.EventRegistrationModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
