import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '../static/contacts/contacts.component';
import { AboutComponent } from '../static/about/about.component';
import { SupportComponent } from '../static/support/support.component';
import { TermsComponent } from '../static/terms/terms.component';
import { SupplementsComponent } from '../pages/supplements/supplements.component';
import { EquipmentComponent } from '../pages/equipment/equipment.component';
import { CartComponent } from '../pages/cart/cart.component';
import { UserInfoComponent } from '../user/user-info/user-info.component';



const routes: Routes = [
    {path: 'contacts', component: ContactsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'support', component: SupportComponent},
    {path: 'terms&conditions', component: TermsComponent},
    {path: 'supplements', component: SupplementsComponent},
    {path: 'equipment', component: EquipmentComponent},
    {path: 'cart', component: CartComponent},
    {path: 'profile', component: UserInfoComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }