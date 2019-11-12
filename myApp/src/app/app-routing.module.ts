import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
    // loadChildren: './newdesenho/newdesenho.module#NewdesenhoPageModule' 
  },
  { path: 'desenhodetalhe',
  loadChildren: () => import('./desenhodetalhe/desenhodetalhe.module').then(m => m.DesenhodetalhePageModule)
  //  loadChildren: './desenhodetalhe/desenhodetalhe.module#DesenhodetalhePageModule' }
  },
  { path: 'desenhodetalhe/:id',
  loadChildren: () => import('./desenhodetalhe/desenhodetalhe.module').then(m => m.DesenhodetalhePageModule)
  //  loadChildren: './desenhodetalhe/desenhodetalhe.module#DesenhodetalhePageModule' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
