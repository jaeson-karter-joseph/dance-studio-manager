import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'trainerRegistration',
    loadChildren: () =>
      import('./trainer-registration/trainer-registration.module').then(
        (m) => m.TrainerRegistrationModule
      ),
  },
  {
    path: 'salaryCalculation',
    loadChildren: () =>
      import('./salary-calculation/salary-calculation.module').then(
        (m) => m.SalaryCalculationModule
      ),
  },
];
// { path: 'trainerDetails', loadChildren: () => import('./trainer-details/trainer-details.module').then(m => m.TrainerDetailsModule)}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerRoutingModule {}
