import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplementsComponent } from '../pages/supplements/supplements.component';
import { EquipmentComponent } from '../pages/equipment/equipment.component';
import { CurrentitemComponent } from './currentitem/currentitem.component';
import { CurrentsuppComponent } from './currentsupp/currentsupp.component';

const routes: Routes = [
  {
    path: 'supplements',

    children: [
      { path: '', pathMatch: 'full', component: SupplementsComponent },
      {
        path: ':themeId',
        component: CurrentsuppComponent,
      },
    ],
  },
  {
    path: 'equipment',
    children: [
      { path: '', pathMatch: 'full', component: EquipmentComponent },
      {
        path: ':themeId',
        component: CurrentitemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
