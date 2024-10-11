import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntraPageRoutingModule } from './entra-routing.module';

import { EntraPage } from './entra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntraPageRoutingModule
  ],
  declarations: [EntraPage]
})
export class EntraPageModule {}
