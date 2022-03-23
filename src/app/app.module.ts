import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { DialogDataComponent } from './dialog-data/dialog-data.component';




@NgModule({
  declarations: [
    AppComponent,
    DialogDataComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
