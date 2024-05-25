import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerDetailsComponent } from './trainer-details.component';

const routes: Routes = [{ path: '', component: TrainerDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerDetailsRoutingModule { }
