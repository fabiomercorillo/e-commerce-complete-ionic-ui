import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'on-boarding',
    loadChildren: () => import('./modules/on-boarding/on-boarding.module').then( m => m.OnBoardingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'post-login',
    loadChildren: () => import('./modules/post-login/post-login.module').then( m => m.PostLoginModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./modules/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pdp',
    loadChildren: () => import('./modules/pdp/pdp.module').then(m => m.PdpModule)
  },
  {
    path: '',
    redirectTo: 'on-boarding',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
