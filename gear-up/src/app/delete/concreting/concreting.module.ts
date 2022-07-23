import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcretingPageRoutingModule } from './concreting-routing.module';

import { ConcretingPage } from './concreting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcretingPageRoutingModule
  ],
  declarations: [ConcretingPage]
})
export class ConcretingPageModule {}
