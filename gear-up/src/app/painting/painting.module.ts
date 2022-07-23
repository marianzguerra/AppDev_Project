import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaintingPageRoutingModule } from './painting-routing.module';

import { PaintingPage } from './painting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaintingPageRoutingModule
  ],
  declarations: [PaintingPage]
})
export class PaintingPageModule {}
