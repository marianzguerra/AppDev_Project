import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlumbingPageRoutingModule } from './plumbing-routing.module';

import { PlumbingPage } from './plumbing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlumbingPageRoutingModule
  ],
  declarations: [PlumbingPage]
})
export class PlumbingPageModule {}
