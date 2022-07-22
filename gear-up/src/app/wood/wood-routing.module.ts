import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoodPage } from './wood.page';

const routes: Routes = [
  {
    path: '',
    component: WoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoodPageRoutingModule {}
