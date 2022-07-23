import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoofingPageRoutingModule } from './roofing-routing.module';

import { RoofingPage } from './roofing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoofingPageRoutingModule
  ],
  declarations: [RoofingPage]
})
export class RoofingPageModule {}
