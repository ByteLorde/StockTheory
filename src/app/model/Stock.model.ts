export class StockQuote {
    symbol: string;
    companyName: string;
    latestPrice: number;
    open: number;
    close: number;
    primaryExchange: string;
    calculationPrice: string;
    openTime: number;
    closeTime: number;
    high: number;
    low: number;
    latestSource: string;
    latestTime: string;
    latestUpdate: number;
    latestVolume: number;
    volume: number;
    iexRealtimePrice: number;
    iexRealtimeSize: number;
    iexLastUpdated: number;
    delayedPrice: number;
    delayedPriceTime: number;
    extendedPrice: number;
    extendedChange: number;
    extendedChangePercent: number;
    extendedPriceTime: number;
    previousClose: number;
    previousVolume: number;
    change: number;
    changePercent: number;
    iexMarketPercent: number;
    iexVolume: number;
    avgTotalVolume: number;
    iexBidPrice: number;
    iexBidSize: number;
    iexAskPrice: number;
    iexAskSize: number;
    marketCap: number;
    week52High: number;
    week52Low: number;
    ytdChange: number;
    peRatio: number;
    lastTradeTime: number;
    isUSMarketOpen: boolean;
}

export class StockQuoteHeader {
    hidden: boolean;
    label: string;
    field: string;
    type: ColumnType;
    compareTo?: string;
}

export class CompanyProfile {
    symbol: string;
    companyName: string;
    exchange: string;
    industry: string;
    website: string;
    description: string;
    CEO: string;
    securityName: string;
    issueType: string;
    sector: string;
    primarySicCode: number;
    employees: number;
    tags: string[];
    address: string;
    address2: string;
    state: string;
    city: string;
    zip: string;
    country: string;
    phone: string;
}

export class BasicStatData {
    open: number;
    high: number;
    low: number;
    close: number;
    week52High: number;
    week52Low: number;
    volume: number;
    avgVolume: number;
    marketCap: number;
    peRation: number;
    divYield: number;
}

export enum ColumnType {
    NUMBER = 'number',
    STRING = 'string',
    TIME = 'time',
    PERCENT = 'percent',
    CURRENCY = 'currency',
}
