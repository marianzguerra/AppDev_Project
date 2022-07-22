import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoodPageRoutingModule } from './wood-routing.module';

import { WoodPage } from './wood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WoodPageRoutingModule
  ],
  declarations: [WoodPage]
})
export class WoodPageModule {}
