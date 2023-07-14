import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
   
  ],
  exports: [
ContactsComponent
  ]
})
export class StaticModule { }
