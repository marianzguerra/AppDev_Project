import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RebarsPageRoutingModule } from './rebars-routing.module';

import { RebarsPage } from './rebars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RebarsPageRoutingModule
  ],
  declarations: [RebarsPage]
})
export class RebarsPageModule {}
