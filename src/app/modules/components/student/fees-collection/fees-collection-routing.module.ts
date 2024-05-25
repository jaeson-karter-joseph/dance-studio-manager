import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesCollectionComponent } from './fees-collection.component';

const routes: Routes = [{ path: '', component: FeesCollectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesCollectionRoutingModule { }
