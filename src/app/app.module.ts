import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReimbFormComponent } from './components/reimb-form/reimb-form.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { ReimbSumComponent } from './components/reimb-sum/reimb-sum.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReimbFormComponent,
    HeaderComponent,
    TableComponent,
    ReimbSumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
