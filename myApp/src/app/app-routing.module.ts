import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'newdesenho', 
    loadChildren: () => import('./newdesenho/newdesenho.module').then(m => m.NewdesenhoPageModule)
  },
  { path: 'newdesenho/:id', 
    loadChildren: () => import('./newdesenho/newdesenho.module').then(m => m.NewdesenhoPageModule)
  },
  { path: 'desenhodetalhe/:id',
    loadChildren: () => import('./desenhodetalhe/desenhodetalhe.module').then(m => m.DesenhodetalhePageModule)
  },
  { path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'search/:cat', 
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
