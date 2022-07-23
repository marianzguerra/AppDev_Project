import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoofingPage } from './roofing.page';

const routes: Routes = [
  {
    path: '',
    component: RoofingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoofingPageRoutingModule {}
