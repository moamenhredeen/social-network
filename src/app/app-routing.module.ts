import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./features/identity/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./features/identity/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
