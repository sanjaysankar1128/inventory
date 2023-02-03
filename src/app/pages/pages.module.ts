import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofitemsComponent } from './listofitems/listofitems.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NewitemsformComponent } from './newitemsform/newitemsform.component';
import { MaterialsModule } from './material/material.module';
import { MaterialRoutingModule } from './material/material-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    ListofitemsComponent,
    NewitemsformComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialsModule,
    MaterialRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule
  ]
})
export class PagesModule { }
