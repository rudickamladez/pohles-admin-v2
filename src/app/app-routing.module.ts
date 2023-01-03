import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "hello",
    component: HelloComponent,
  },
  {
    path: "404",
    component: NotFoundComponent,
  },
  {
    path: "login",
    component: LoginWindowComponent,
  },
  {
    path: "",
    redirectTo: "hello",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
