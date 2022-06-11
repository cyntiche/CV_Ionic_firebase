import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiplomePageRoutingModule } from './diplome-routing.module';

import { DiplomePage } from './diplome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiplomePageRoutingModule
  ],
  declarations: [DiplomePage]
})
export class DiplomePageModule {}
