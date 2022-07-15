import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnBoardingPage } from './on-boarding.page';

const routes: Routes = [
  {
    path: '',
    component: OnBoardingPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnBoardingRoutingModule { }
