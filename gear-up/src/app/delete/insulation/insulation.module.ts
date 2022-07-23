import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsulationPageRoutingModule } from './insulation-routing.module';

import { InsulationPage } from './insulation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsulationPageRoutingModule
  ],
  declarations: [InsulationPage]
})
export class InsulationPageModule {}
