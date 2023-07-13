import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SupplimentsComponent } from './suppliments/suppliments.component';




@NgModule({
  declarations: [
    HomeComponent,
    SupplimentsComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    SupplimentsComponent
  ]
})
export class PagesModule { }
