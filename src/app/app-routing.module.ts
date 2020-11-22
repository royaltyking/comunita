import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './controllers/articles';

import { ProjectsComponent } from './controllers/projects';
import { ProjectEComponent } from './controllers/projectE';

import { SignUpComponent } from './controllers/signUp';

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
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'project-e/:id',
    component: ProjectEComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
