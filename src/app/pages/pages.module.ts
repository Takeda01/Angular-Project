import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


import { AppModule } from '../app.module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';
import { SupplementsComponent } from './supplements/supplements.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CurrentitemComponent } from './currentitem/currentitem.component';
import { CurrentsuppComponent } from './currentsupp/currentsupp.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    
    SafePipe,
    SupplementsComponent,
    EquipmentComponent,
    CurrentitemComponent,
    CurrentsuppComponent,
    CartComponent,
    CheckOutComponent,
    
  ],
  imports: [
    CommonModule,
  HttpClientModule,
  PagesRoutingModule,
  FormsModule
    
  ],
  exports: [
    HomeComponent,
    
  ],

 providers: [ApiService]
})
export class PagesModule { }
