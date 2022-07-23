import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsulationPage } from './insulation.page';

const routes: Routes = [
  {
    path: '',
    component: InsulationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsulationPageRoutingModule {}
