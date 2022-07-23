import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RebarPage } from './rebar.page';

const routes: Routes = [
  {
    path: '',
    component: RebarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RebarPageRoutingModule {}
