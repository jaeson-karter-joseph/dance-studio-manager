import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudioOverviewComponent } from './studio-overview.component';

const routes: Routes = [{ path: '', component: StudioOverviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioOverviewRoutingModule { }
