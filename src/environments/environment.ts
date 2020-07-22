// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const IEX_URL = 'https://cloud.iexapis.com/stable';
export const environment = {
  production: false,
  API_KEY: 'pk_d1f42a9c2f29432cb7f4193df7d1a32c',
  list_most_active: `${IEX_URL}/stock/market/list/mostactive`,
  list_gainers: `${IEX_URL}/stock/market/list/gainers`,
  list_losers: `${IEX_URL}/stock/market/list/losers`,
  list_volume: `${IEX_URL}/stock/market/list/iexvolume`,
  list_percent: `${IEX_URL}/stock/market/list/iexpercent`,

  // QUOTE
  stock_quote: `${IEX_URL}/stock/$1/quote`,

  // NEWS
  news_symbols: `${IEX_URL}/stock/$1/news`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
