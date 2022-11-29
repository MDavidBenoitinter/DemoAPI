import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'userlist',
    loadChildren: () => import('./pages/userlist/userlist.module').then( m => m.UserlistPageModule)
  },
  {
    path: 'character-des/:id',
    loadChildren: () => import('./pages/character-des/character-des.module').then( m => m.CharacterDesPageModule)
  },
  {
    path: 'usersnav/:route',
    loadChildren: () => import('./pages/usersnav/usersnav.module').then( m => m.UsersnavPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
