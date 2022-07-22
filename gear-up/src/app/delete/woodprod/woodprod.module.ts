import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoodprodPageRoutingModule } from './woodprod-routing.module';

import { WoodprodPage } from './woodprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WoodprodPageRoutingModule
  ],
  declarations: [WoodprodPage]
})
export class WoodprodPageModule {}
