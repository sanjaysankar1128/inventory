import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from 'src/layouts/layouts.module';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialsModule } from './pages/material/material.module';
import { MaterialRoutingModule } from './pages/material/material-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
    PagesModule,
    CommonModule,
    BrowserAnimationsModule,
    PagesRoutingModule,
    HttpClientModule,
    MaterialsModule,
    MaterialRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
