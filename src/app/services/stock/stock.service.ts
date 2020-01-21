import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import {CompanyProfile, StockQuote} from '../../model/Stock.model';

@Injectable({
    providedIn: 'root'
})
export class StockService {

    constructor(private http: HttpClient) {
    }

    fetchMostActive() {
        return this.http.get(environment.list_most_active);
    }

    fetchTopGainers(): Observable<StockQuote[]> {
        return of([{symbol: 'SRNE', companyName: 'Sorrento Therapeutics, Inc.', primaryExchange: 'NASDAQ', calculationPrice: 'close', open: 5.05, openTime: 1578666601035, close: 4.76, closeTime: 1578690000545, high: 5.09, low: 4.4, latestPrice: 4.76, latestSource: 'Close', latestTime: 'January 10, 2020', latestUpdate: 1578690000545, latestVolume: 48297198, iexRealtimePrice: null, iexRealtimeSize: null, iexLastUpdated: null, delayedPrice: 4.8, delayedPriceTime: 1578692808361, extendedPrice: 4.82, extendedChange: 0.06, extendedChangePercent: 0.01261, extendedPriceTime: 1578704369018, previousClose: 3.41, previousVolume: 1805740, change: 1.35, changePercent: 0.39589, volume: 48297198, iexMarketPercent: null, iexVolume: null, avgTotalVolume: 7804730, iexBidPrice: null, iexBidSize: null, iexAskPrice: null, iexAskSize: null, marketCap: 783172320, peRatio: -2.12, week52High: 6.5, week52Low: 1.39, ytdChange: 0.79999, lastTradeTime: 1578690000545, isUSMarketOpen: false}, {symbol: 'NKTR', companyName: 'Nektar Therapeutics', primaryExchange: 'NASDAQ', calculationPrice: 'close', open: 22.5, openTime: 1578666600871, close: 26.92, closeTime: 1578690000539, high: 27.02, low: 22.48, latestPrice: 26.92, latestSource: 'Close', latestTime: 'January 10, 2020', latestUpdate: 1578690000539, latestVolume: 11715747, iexRealtimePrice: null, iexRealtimeSize: null, iexLastUpdated: null, delayedPrice: 27.16, delayedPriceTime: 1578692729668, extendedPrice: 27.29, extendedChange: 0.37, extendedChangePercent: 0.01374, extendedPriceTime: 1578704376376, previousClose: 21.59, previousVolume: 1904218, change: 5.33, changePercent: 0.24687, volume: 11715747, iexMarketPercent: null, iexVolume: null, avgTotalVolume: 2205715, iexBidPrice: null, iexBidSize: null, iexAskPrice: null, iexAskSize: null, marketCap: 4735820240, peRatio: -11.03, week52High: 47.11, week52Low: 15.63, ytdChange: 0.53127, lastTradeTime: 1578690000539, isUSMarketOpen: false}, {symbol: 'PHAS', companyName: 'PhaseBio Pharmaceuticals, Inc.', primaryExchange: 'NASDAQ', calculationPrice: 'close', open: 7.01, openTime: 1578667800001, close: 6.79, closeTime: 1578690000369, high: 8.49, low: 5.94, latestPrice: 6.79, latestSource: 'Close', latestTime: 'January 10, 2020', latestUpdate: 1578690000369, latestVolume: 5577553, iexRealtimePrice: null, iexRealtimeSize: null, iexLastUpdated: null, delayedPrice: 6.76, delayedPriceTime: 1578692752785, extendedPrice: 6.7, extendedChange: -0.09, extendedChangePercent: -0.01325, extendedPriceTime: 1578704389593, previousClose: 5.65, previousVolume: 334376, change: 1.14, changePercent: 0.20177, volume: 5577553, iexMarketPercent: null, iexVolume: null, avgTotalVolume: 777968, iexBidPrice: null, iexBidSize: null, iexAskPrice: null, iexAskSize: null, marketCap: 195321140, peRatio: -5.29, week52High: 16.65, week52Low: 2.56, ytdChange: 0.39087, lastTradeTime: 1578690000369, isUSMarketOpen: false}, {symbol: 'MNPR', companyName: 'Monopar Therapeutics, Inc.', primaryExchange: 'NASDAQ', calculationPrice: 'close', open: 18.11, openTime: 1578666600819, close: 22, closeTime: 1578690000831, high: 22.742, low: 18.11, latestPrice: 22, latestSource: 'Close', latestTime: 'January 10, 2020', latestUpdate: 1578690000831, latestVolume: 99776, iexRealtimePrice: null, iexRealtimeSize: null, iexLastUpdated: null, delayedPrice: 21.235, delayedPriceTime: 1578692358298, extendedPrice: 21, extendedChange: -1, extendedChangePercent: -0.04545, extendedPriceTime: 1578697497555, previousClose: 17.8, previousVolume: 79438, change: 4.2, changePercent: 0.23596, volume: 99776, iexMarketPercent: null, iexVolume: null, avgTotalVolume: 194449, iexBidPrice: null, iexBidSize: null, iexAskPrice: null, iexAskSize: null, marketCap: 232927200, peRatio: -59.59, week52High: 48, week52Low: 8.35, ytdChange: 0.50986, lastTradeTime: 1578690000830, isUSMarketOpen: false}, {symbol: 'RARE', companyName: 'Ultragenyx Pharmaceutical, Inc.', primaryExchange: 'NASDAQ', calculationPrice: 'close', open: 48.91, openTime: 1578666600664, close: 53.96, closeTime: 1578690000654, high: 58.54, low: 48.84, latestPrice: 53.96, latestSource: 'Close', latestTime: 'January 10, 2020', latestUpdate: 1578690000654, latestVolume: 3273162, iexRealtimePrice: null, iexRealtimeSize: null, iexLastUpdated: null, delayedPrice: 53.75, delayedPriceTime: 1578692695168, extendedPrice: 53.99, extendedChange: 0.03, extendedChangePercent: 0.00056, extendedPriceTime: 1578698233633, previousClose: 43.73, previousVolume: 620344, change: 10.23, changePercent: 0.23394, volume: 3273162, iexMarketPercent: null, iexVolume: null, avgTotalVolume: 585945, iexBidPrice: null, iexBidSize: null, iexAskPrice: null, iexAskSize: null, marketCap: 3117323160, peRatio: -7.46, week52High: 74.5, week52Low: 35.41, ytdChange: 0.48563999999999996, lastTradeTime: 1578690000654, isUSMarketOpen: false}, {symbol: 'VERO', companyName: 'Venus Concept, Inc.', primaryExchange: 'NASDAQ', calculationPrice: 'close', open: 5.9, openTime: 1578666604888, close: 6.66, closeTime: 1578690000441, high: 7.13, low: 5.91, latestPrice: 6.66, latestSource: 'Close', latestTime: 'January 10, 2020', latestUpdate: 1578690000441, latestVolume: 170208, iexRealtimePrice: null, iexRealtimeSize: null, iexLastUpdated: null, delayedPrice: 6.79, delayedPriceTime: 1578693150684, extendedPrice: 6.79, extendedChange: 0.13, extendedChangePercent: 0.01952, extendedPriceTime: 1578693150684, previousClose: 5.55, previousVolume: 104518, change: 1.11, changePercent: 0.2, volume: 170208, iexMarketPercent: null, iexVolume: null, avgTotalVolume: 124117, iexBidPrice: null, iexBidSize: null, iexAskPrice: null, iexAskSize: null, marketCap: 197588880, peRatio: -0.57, week52High: 23.25, week52Low: 2.63, ytdChange: 0.6637, lastTradeTime: 1578690002707, isUSMarketOpen: false}, {symbol: 'RVNC', companyName: 'Revance Therapeutics, Inc.', primaryExchange: 'NASDAQ', calculationPrice: 'close', open: 17.41, openTime: 1578666600365, close: 19.5, closeTime: 1578690000442, high: 19.8, low: 17.3, latestPrice: 19.5, latestSource: 'Close', latestTime: 'January 10, 2020', latestUpdate: 1578690000442, latestVolume: 2665821, iexRealtimePrice: null, iexRealtimeSize: null, iexLastUpdated: null, delayedPrice: 19.5, delayedPriceTime: 1578692762271, extendedPrice: 19.5, extendedChange: 0, extendedChangePercent: 0, extendedPriceTime: 1578704041538, previousClose: 16.48, previousVolume: 310322, change: 3.02, changePercent: 0.18325, volume: 2665821, iexMarketPercent: null, iexVolume: null, avgTotalVolume: 838365, iexBidPrice: null, iexBidSize: null, iexAskPrice: null, iexAskSize: null, marketCap: 879613800, peRatio: -5.15, week52High: 20.53, week52Low: 9.88, ytdChange: 0.40205, lastTradeTime: 1578690000441, isUSMarketOpen: false}, {symbol: 'BTAI', companyName: 'BioXcel Therapeutics, Inc.', primaryExchange: 'NASDAQ', calculationPrice: 'close', open: 12.26, openTime: 1578666600877, close: 14.24, closeTime: 1578690000637, high: 15.21, low: 12.251, latestPrice: 14.24, latestSource: 'Close', latestTime: 'January 10, 2020', latestUpdate: 1578690000637, latestVolume: 506208, iexRealtimePrice: null, iexRealtimeSize: null, iexLastUpdated: null, delayedPrice: 13.2, delayedPriceTime: 1578690007798, extendedPrice: 14.2, extendedChange: -0.04, extendedChangePercent: -0.00281, extendedPriceTime: 1578696683650, previousClose: 12.26, previousVolume: 404489, change: 1.98, changePercent: 0.1615, volume: 506208, iexMarketPercent: null, iexVolume: null, avgTotalVolume: 299391, iexBidPrice: null, iexBidSize: null, iexAskPrice: null, iexAskSize: null, marketCap: 256818400, peRatio: -7.03, week52High: 19.89, week52Low: 3.76, ytdChange: 0.2086, lastTradeTime: 1578690007798, isUSMarketOpen: false}]);
        // return this.http.get(environment.list_gainers);
    }

    fetchTopLosers() {
        return this.http.get(environment.list_losers);
    }

    fetchTopPercent() {
        return this.http.get(environment.list_percent);
    }

    fetchTopVolume() {
        return this.http.get(environment.list_volume);
    }

    fetchCompanyProfile(symbol: string): Observable<CompanyProfile> {
        return of({
            symbol: 'AAPL',
            companyName: 'Apple Inc.',
            exchange: 'NASDAQ',
            industry: 'Telecommunications Equipment',
            website: 'http://www.apple.com',
            description: 'Apple, Inc. engages in the design, manufacture, and marketing of mobile communication, media devices, personal computers, and portable digital music players. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak on April 1, 1976 and is headquartered in Cupertino, CA.',
            CEO: 'Timothy Donald Cook',
            securityName: 'Apple Inc.',
            issueType: 'cs',
            sector: 'Electronic Technology',
            primarySicCode: 3663,
            employees: 132000,
            tags: [
                'Electronic Technology',
                'Telecommunications Equipment'
            ],
            address: 'One Apple Park Way',
            address2: null,
            state: 'CA',
            city: 'Cupertino',
            zip: '95014-2083',
            country: 'US',
            phone: '1.408.974.3123'
        });

    }
}
