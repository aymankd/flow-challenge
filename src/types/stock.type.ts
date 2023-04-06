export enum StockType {
  GOOGLE = "google",
  AMAZON = "amazon",
}

export interface Stock {
  _id: string;
  v: number;
  vw: number;
  o: number;
  c: number;
  highestPriceOfTheDay: number;
  lowestPriceOfTheDay: number;
  timestamp: Date;
  n: number;
  stockType: StockType;
}

export type StockByMonth = {
  _id: {
    stockType: StockType;
    year: number;
    month: number;
  };
  month_price: number;
};

export type BestTradeType<T = Date> = {
  buyPrice: number;
  sellPrice: number;
  profit: number;
  buyDate: T;
  sellDate: T;
};

export type StockTypeByMonth = Record<StockType, StockByMonth[]>;
export type BestTradeByStockTypeType = Record<StockType, BestTradeType | null>;
