import { createAction } from "redux-actions";
import { STOCK_ACTIONS } from "../../constants";
import { StockTypeByMonth } from "../../types/stock.type";

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

export type StockActionType =
  | updateTripStepBudgetActionType
  | updateTripStepBudgetDoneActionType
  | updateTripStepBudgetFailedActionType;
