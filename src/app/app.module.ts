import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginWindowComponent } from './login-window/login-window.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NotFoundComponent,
    LoginWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
