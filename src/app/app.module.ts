import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './pages/landing/landing.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from './services/interceptor/http-interceptor.service';
import {StockService} from './services/stock/stock.service';
import { StockTableComponent } from './components/stock-table/stock-table.component';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { CardMenuComponent } from './components/stock-card/card-menu/card-menu.component';
import { StockCardMenuItemComponent } from './components/stock-card/card-menu/stock-card-menu-item/stock-card-menu-item.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { LabelsMenuItemComponent } from './components/stock-card/card-menu/menu-items/labels-menu-item/labels-menu-item.component';
import { LabelComponent } from './components/stock-card/card-menu/menu-items/labels-menu-item/label/label.component';
import { CardSectionComponent } from './components/stock-card/card-section/card-section.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { ChartSectionComponent } from './components/stock-card/card-sections/chart-section/chart-section.component';
import {ChartModule} from 'primeng/chart';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {ListboxModule, MessageService, TooltipModule, VirtualScrollerModule} from 'primeng';
import {ChipsModule} from 'primeng/chips';
import { CompanyDetailsSectionComponent } from './components/stock-card/card-sections/company-details-section/company-details-section.component';
import {FormsModule} from '@angular/forms';
import {InplaceModule} from 'primeng/inplace';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import {TabViewModule} from 'primeng/tabview';
import { TradeComponent } from './components/stock-card/trade/trade.component';
import { MembersMenuItemComponent } from './components/stock-card/card-menu/menu-items/members-menu-item/members-menu-item.component';
import { BuySellComponent } from './components/stock-card/card-menu/menu-items/buy-sell/buy-sell.component';
import { DropdownModule } from 'primeng/dropdown';
import { SupplementalSectionComponent } from './components/stock-card/card-sections/supplemental-section/supplemental-section.component';
import { CardFacingLabelComponent } from './components/stock-card/card-menu/menu-items/labels-menu-item/card-facing-label/card-facing-label.component';
import { LabelsEditComponent } from './components/stock-card/card-menu/menu-items/labels-menu-item/labels-edit/labels-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        HeaderComponent,
        FooterComponent,
        StockTableComponent,
        StockCardComponent,
        CardMenuComponent,
        StockCardMenuItemComponent,
        LabelsMenuItemComponent,
        LabelComponent,
        CardSectionComponent,
        LineChartComponent,
        ChartSectionComponent,
        CompanyDetailsSectionComponent,
        ShortNumberPipe,
        TradeComponent,
        MembersMenuItemComponent,
        BuySellComponent,
        SupplementalSectionComponent,
        CardFacingLabelComponent,
        LabelsEditComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        TableModule,
        DialogModule,
        OverlayPanelModule,
        ScrollPanelModule,
        ChartModule,
        TooltipModule,
        DropdownModule,
        MessageModule,
        MessagesModule,
        ToastModule,
        ButtonModule,
        BrowserAnimationsModule,
        ChipsModule,
        CardModule,
        TabViewModule,
        InplaceModule,
        VirtualScrollerModule,
        FormsModule,
        OverlayPanelModule,
        ListboxModule
    ],
    providers: [
        StockService,
        MessageService,
        ShortNumberPipe,
        {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
