import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { HttpModule } from '@angular/http';

import { routes } from './app.routers';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SystemComponent } from './system/system.component';
import { SystemHomeComponent } from './system/home/system.home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SystemComponent,
    SystemHomeComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
