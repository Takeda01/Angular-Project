import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
   
  ],
  exports: [
ContactsComponent
  ]
})
export class StaticModule { }
