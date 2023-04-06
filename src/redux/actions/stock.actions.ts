import { createAction } from "redux-actions";
import { STOCK_ACTIONS } from "../../constants";
import {
  BestTradeType,
  StockType,
  StockTypeByMonth,
} from "../../types/stock.type";

export const getStocksByMonthAction = createAction(
  STOCK_ACTIONS.GET_STOCKS_BY_MONTH
);

export type updateTripStepBudgetActionType = {
  type: STOCK_ACTIONS.GET_STOCKS_BY_MONTH;
};

export const getStocksByMonthDoneAction = createAction<StockTypeByMonth>(
  STOCK_ACTIONS.GET_STOCKS_BY_MONTH_DONE
);

export type updateTripStepBudgetDoneActionType = {
  type: STOCK_ACTIONS.GET_STOCKS_BY_MONTH_DONE;
  payload: StockTypeByMonth;
};

export const getStocksByMonthFailedAction = createAction(
  STOCK_ACTIONS.GET_STOCKS_BY_MONTH_FAILED
);

export type updateTripStepBudgetFailedActionType = {
  type: STOCK_ACTIONS.GET_STOCKS_BY_MONTH_FAILED;
};

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

export type StockActionType =
  | updateTripStepBudgetActionType
  | updateTripStepBudgetDoneActionType
  | updateTripStepBudgetFailedActionType
  | getBestTradeActionType
  | getBestTradeDoneActionType;
