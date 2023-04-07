import { BestTradeType, StockTypeByMonth } from "../types/stock.type";
import { ApiResponse } from "./types";
import HttpClient from "./utils/http-client";

const API_URL = process.env.REACT_APP_API_URL;

const getStocksByMonth = (date: Date) => {
  return HttpClient.get<ApiResponse<StockTypeByMonth>>(`${API_URL}/stocks`, {
    date: date.toISOString(),
  });
};

const getBestTrade = (stockType: string, budget: number) => {
  return HttpClient.get<ApiResponse<BestTradeType>>(
    `${API_URL}/stocks/bestTrade`,
    {
      stockType,
      budget: budget.toString(),
    }
  );
};

const getBestTrades = (budget: number) => {
  return HttpClient.get<ApiResponse<{ trades: BestTradeType; time: number }>>(
    `${API_URL}/stocks/StocksBestTrades`,
    {
      budget: budget.toString(),
    }
  );
};

export const stockApi = {
  getStocksByMonth,
  getBestTrade,
  getBestTrades,
};
