import { StockTypeByMonth } from "../types/stock.type";
import { ApiResponse } from "./types";
import HttpClient from "./utils/http-client";

const API_URL = process.env.REACT_APP_API_URL;

const getStocksByMonth = (date: Date) => {
  return HttpClient.get<ApiResponse<StockTypeByMonth>>(`${API_URL}/stocks`, {
    date: date.toISOString(),
  });
};

export const stockApi = {
  getStocksByMonth,
};
