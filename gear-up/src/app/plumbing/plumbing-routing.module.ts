import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlumbingPage } from './plumbing.page';

const routes: Routes = [
  {
    path: '',
    component: PlumbingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlumbingPageRoutingModule {}
