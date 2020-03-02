import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReimbFormComponent } from './components/reimb-form/reimb-form.component';
import { HeaderComponent } from './components/header/header.component';
import { StatusPipe } from './pipes/status/status.pipe';
import { TypePipe } from './pipes/type/type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReimbFormComponent,
    HeaderComponent,
    StatusPipe,
    TypePipe,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
