import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostLoginPage } from './post-login.page';

const routes: Routes = [
  {
    path: '',
    component: PostLoginPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostLoginRoutingModule { }
