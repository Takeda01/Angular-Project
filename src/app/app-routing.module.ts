import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SupplimentsComponent } from './pages/suppliments/suppliments.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'suppliments', component: SupplimentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
