import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReimbFormComponent } from './components/reimb-form/reimb-form.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { StatusPipe } from './pipes/status/status.pipe';
import { TypePipe } from './pipes/type/type.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ReimbFormComponent,
    HeaderComponent,
    AdminFormComponent,
    StatusPipe,
    TypePipe,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
