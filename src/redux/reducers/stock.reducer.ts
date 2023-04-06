import { STOCK_ACTIONS } from "../../constants";
import {
  BestTradeByStockTypeType,
  StockTypeByMonth,
} from "../../types/stock.type";
import { StockActionType } from "../actions";

export type StocksState = {
  StocksTypeByMonth: StockTypeByMonth;
  bestTrade: BestTradeByStockTypeType;
  failure: boolean;
  isLoading: boolean;
};

const initialState: StocksState = {
  StocksTypeByMonth: {
    amazon: [],
    google: [],
  } as StockTypeByMonth,
  bestTrade: {
    amazon: null,
    google: null,
  },
  failure: false,
  isLoading: false,
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
        isLoading: true,
      };
    case STOCK_ACTIONS.GET_STOCKS_BY_MONTH_DONE:
      return {
        ...state,
        StocksTypeByMonth: action.payload,
        isLoading: false,
      };
    case STOCK_ACTIONS.GET_STOCKS_BY_MONTH_FAILED:
      return {
        ...state,
        failure: true,
        isLoading: false,
      };
    case STOCK_ACTIONS.GET_BEST_TRADE_DONE:
      return {
        ...state,
        bestTrade: {
          ...state.bestTrade,
          [action.payload.stockType]: action.payload.trade,
        },
      };
    default:
      return state;
  }
}
