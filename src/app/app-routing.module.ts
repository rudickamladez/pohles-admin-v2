import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { LoginWindowComponent } from './login-page/login-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginWindowComponent,
  },
  {
      path: 'admin',
      loadChildren: () => import('./administration/administration.module').then(o => o.AdministrationModule)
  },
  {
    path: "",
    pathMatch: "full",
    component: HelloComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
