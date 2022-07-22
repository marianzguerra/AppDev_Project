import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RebarsPage } from './rebars.page';

const routes: Routes = [
  {
    path: '',
    component: RebarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RebarsPageRoutingModule {}
