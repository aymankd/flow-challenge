import { createAction } from "redux-actions";
import { STOCK_ACTIONS } from "../../constants";
import {
  BestTradeType,
  StockType,
  StockTypeByMonth,
  Trade,
} from "../../types/stock.type";

// getStocksByMonth
export const getStocksByMonthAction = createAction(
  STOCK_ACTIONS.GET_STOCKS_BY_MONTH
);
export type getStocksByMonthActionType = {
  type: STOCK_ACTIONS.GET_STOCKS_BY_MONTH;
};
export const getStocksByMonthDoneAction = createAction<StockTypeByMonth>(
  STOCK_ACTIONS.GET_STOCKS_BY_MONTH_DONE
);
export type getStocksByMonthDoneActionType = {
  type: STOCK_ACTIONS.GET_STOCKS_BY_MONTH_DONE;
  payload: StockTypeByMonth;
};
export const getStocksByMonthFailedAction = createAction(
  STOCK_ACTIONS.GET_STOCKS_BY_MONTH_FAILED
);
export type getStocksByMonthFailedActionType = {
  type: STOCK_ACTIONS.GET_STOCKS_BY_MONTH_FAILED;
};

// getBestTrade
export const getBestTradeAction = createAction<StockType>(
  STOCK_ACTIONS.GET_BEST_TRADE
);
export type getBestTradeActionType = {
  type: STOCK_ACTIONS.GET_BEST_TRADE;
  payload: StockType;
};
export const getBestTradeDoneAction = createAction<{
  stockType: StockType;
  trade: BestTradeType;
}>(STOCK_ACTIONS.GET_BEST_TRADE_DONE);
export type getBestTradeDoneActionType = {
  type: STOCK_ACTIONS.GET_BEST_TRADE_DONE;
  payload: {
    stockType: StockType;
    trade: BestTradeType;
  };
};

// getBestTrades
export const getBestTradesAction = createAction(STOCK_ACTIONS.GET_BEST_TRADES);
export type getBestTradesActionType = {
  type: STOCK_ACTIONS.GET_BEST_TRADES;
};
export const getBestTradesDoneAction = createAction<{
  trades: Trade[];
  time: number;
}>(STOCK_ACTIONS.GET_BEST_TRADES_DONE);
export type getBestTradesDoneActionType = {
  type: STOCK_ACTIONS.GET_BEST_TRADES_DONE;
  payload: {
    trades: Trade[];
    time: number;
  };
};

export type StockActionType =
  | getStocksByMonthActionType
  | getStocksByMonthDoneActionType
  | getStocksByMonthFailedActionType
  | getBestTradeActionType
  | getBestTradeDoneActionType
  | getBestTradesActionType
  | getBestTradesDoneActionType;
