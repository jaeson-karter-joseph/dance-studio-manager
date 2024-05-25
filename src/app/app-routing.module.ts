import { NgModule } from '@angular/core';
import { RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { AppLayoutComponent } from './modules/shared/app-layout/components/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent, children: [
      { path: 'student', loadChildren: () => import('./modules/components/student/student.module').then(m => m.StudentModule) },
      { path: 'trainer', loadChildren: () => import('./modules/components/trainer/trainer.module').then(m => m.TrainerModule) },
      { path: 'event', loadChildren: () => import('./modules/components/event/event.module').then(m => m.EventModule) },
      { path: 'dashboard', loadChildren: () => import('./modules/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  },

  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs: true, enableViewTransitions : true } ),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
