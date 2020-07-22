import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {ActivityPageComponent} from './pages/activity-page/activity-page.component';
import {MarketPageComponent} from './pages/market-page/market-page.component';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {PortfolioPageComponent} from './pages/portfolio-page/portfolio-page.component';


const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'portfolio',
    component: PortfolioPageComponent
  },
  {
    path: 'activity',
    component: ActivityPageComponent
  },
  {
    path: 'market',
    component: MarketPageComponent
  },
  {
    path: 'news',
    component: NewsPageComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'landing'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  AppRoutingModule { }
