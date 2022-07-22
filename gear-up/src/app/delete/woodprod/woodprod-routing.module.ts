import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoodprodPage } from './woodprod.page';

const routes: Routes = [
  {
    path: '',
    component: WoodprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoodprodPageRoutingModule {}
