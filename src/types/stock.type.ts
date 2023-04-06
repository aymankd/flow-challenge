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

export type StockTypeByMonth = Record<StockType, StockByMonth[]>;
