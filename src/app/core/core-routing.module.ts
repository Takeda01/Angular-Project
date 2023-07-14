import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '../static/contacts/contacts.component';
import { AboutComponent } from '../static/about/about.component';



const routes: Routes = [
    {path: 'contacts', component: ContactsComponent},
    {path: 'about', component: AboutComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }