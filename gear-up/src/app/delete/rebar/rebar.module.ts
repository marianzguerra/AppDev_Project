import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RebarPageRoutingModule } from './rebar-routing.module';

import { RebarPage } from './rebar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RebarPageRoutingModule
  ],
  declarations: [RebarPage]
})
export class RebarPageModule {}
