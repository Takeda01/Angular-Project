import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { RouterLink } from '@angular/router';
import { TermsComponent } from './terms/terms.component';



@NgModule({
  declarations: [
    ContactsComponent,
    AboutComponent,
    SupportComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    RouterLink
   
  ],
  exports: [
ContactsComponent
  ]
})
export class StaticModule { }
