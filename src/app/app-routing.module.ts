import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './modules/shared/app-layout/components/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent, children: [
      { path: 'student', loadChildren: () => import('./modules/components/student/student.module').then(m => m.StudentModule) },
      { path: 'trainer', loadChildren: () => import('./modules/components/trainer/trainer.module').then(m => m.TrainerModule) },
      { path: 'eventRegistration', loadChildren: () => import('./modules/components/event-registration/event-registration.module').then(m => m.EventRegistrationModule) },
    ]
  },

  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
