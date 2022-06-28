import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
       {
    path: 'diplome',
    loadChildren: () => import('../diplome/diplome.module').then( m => m.DiplomePageModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('../experience/experience.module').then( m => m.ExperiencePageModule)
  },
  {
    path: 'informations',
    loadChildren: () => import('../informations/informations.module').then( m => m.InformationsPageModule)
  },
  {
    path: 'langues',
    loadChildren: () => import('../langues/langues.module').then( m => m.LanguesPageModule)
  },
  {
    path: 'comptes',
    loadChildren: () => import('../comptes/comptes.module').then( m => m.ComptesPageModule)
  },
  {
    path: 'competences',
    loadChildren: () => import('../competences/competences.module').then( m => m.CompetencesPageModule)
  },
  {
    path: 'loisirs',
    loadChildren: () => import('../loisirs/loisirs.module').then( m => m.LoisirsPageModule)
  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
