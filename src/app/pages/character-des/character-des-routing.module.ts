import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDesPage } from './character-des.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterDesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterDesPageRoutingModule {}
