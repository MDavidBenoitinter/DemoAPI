import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersnavPage } from './usersnav.page';

const routes: Routes = [
  {
    path: '',
    component: UsersnavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersnavPageRoutingModule {}
