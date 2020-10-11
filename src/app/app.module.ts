import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { TotalHeightDirective } from './directives/total-height.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LoginFormComponent,
    TotalHeightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
