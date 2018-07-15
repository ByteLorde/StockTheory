import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsfeedPageComponent} from './newsfeed-page/newsfeed-page.component';
import {StocksPageComponent} from './stocks-page/stocks-page.component';
import {MypageComponent} from './mypage/mypage.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {GlossaryPageComponent} from './glossary-page/glossary-page.component';
import {TutorialPageComponent} from './tutorial-page/tutorial-page.component';
import {StocksMainPageComponent} from './stocks-main-page/stocks-main-page.component';
import {StockModalComponent} from './stock-modal/stock-modal.component';
import {LabelMenuComponent} from "./label-menu/label-menu.component";
import {LabelComponent} from "./label/label.component";
import {StockMarketViewComponent} from "./stock-market-view/stock-market-view.component";
import {ScreenerPageComponent} from "./screener-page/screener-page.component";
import {StockCardComponent} from "./stock-card/stock-card.component";

const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'mypage', component: MypageComponent},
  {path: 'newsfeed', component: NewsfeedPageComponent},
  {path: 'stocks', component: StocksPageComponent},
  {path: 'stocksmain', component: StocksMainPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'glossary', component: GlossaryPageComponent},
  {path: 'tutorial', component: TutorialPageComponent},
  {path: 'temp', component: StockModalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
