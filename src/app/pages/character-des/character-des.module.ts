import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterDesPageRoutingModule } from './character-des-routing.module';

import { CharacterDesPage } from './character-des.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDesPageRoutingModule
  ],
  declarations: [CharacterDesPage]
})
export class CharacterDesPageModule {}
