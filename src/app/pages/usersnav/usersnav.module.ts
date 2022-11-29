import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersnavPageRoutingModule } from './usersnav-routing.module';

import { UsersnavPage } from './usersnav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersnavPageRoutingModule
  ],
  declarations: [UsersnavPage]
})
export class UsersnavPageModule {}
