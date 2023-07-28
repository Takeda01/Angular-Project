import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SupplimentsComponent } from './suppliments/suppliments.component';

import { AppModule } from '../app.module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';




@NgModule({
  declarations: [
    HomeComponent,
    SupplimentsComponent,
    SafePipe,
    
  ],
  imports: [
    CommonModule,
  HttpClientModule
    
  ],
  exports: [
    HomeComponent,
    SupplimentsComponent
  ],

 providers: [ApiService]
})
export class PagesModule { }
