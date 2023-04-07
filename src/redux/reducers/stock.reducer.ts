import { STOCK_ACTIONS } from "../../constants";
import {
  BestTradeByStockTypeType,
  StockTypeByMonth,
  Trade,
} from "../../types/stock.type";
import { StockActionType } from "../actions";

export type StocksState = {
  StocksTypeByMonth: StockTypeByMonth;
  bestTrade: BestTradeByStockTypeType;
  bestTrades: Trade[];
  executionTime: null | number;
  failure: boolean;
  bestTradeIsLoading: boolean;
  bestTradesIsLoading: boolean;
};

const initialState: StocksState = {
  StocksTypeByMonth: {
    amazon: [],
    google: [],
  },
  bestTrade: {
    amazon: null,
    google: null,
  },
  failure: false,
  bestTradeIsLoading: false,
  bestTradesIsLoading: false,
  bestTrades: [],
  executionTime: null,
};

export function stockReducer(
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: StockActionType
): StocksState {
  switch (action.type) {
    case STOCK_ACTIONS.GET_STOCKS_BY_MONTH:
      return {
        ...state,
        bestTradeIsLoading: true,
      };
    case STOCK_ACTIONS.GET_STOCKS_BY_MONTH_DONE:
      return {
        ...state,
        StocksTypeByMonth: action.payload,
        bestTradeIsLoading: false,
      };
    case STOCK_ACTIONS.GET_STOCKS_BY_MONTH_FAILED:
      return {
        ...state,
        failure: true,
        bestTradeIsLoading: false,
      };
    case STOCK_ACTIONS.GET_BEST_TRADE_DONE:
      return {
        ...state,
        bestTrade: {
          ...state.bestTrade,
          [action.payload.stockType]: action.payload.trade,
        },
      };
    case STOCK_ACTIONS.GET_BEST_TRADES:
      return {
        ...state,
        bestTradesIsLoading: true,
      };
    case STOCK_ACTIONS.GET_BEST_TRADES_DONE:
      return {
        ...state,
        bestTrades: action.payload.trades,
        executionTime: action.payload.time,
        bestTradesIsLoading: false,
      };

    default:
      return state;
  }
}
