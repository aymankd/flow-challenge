import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { stockApi } from "../../apis";
import { CustomAxiosResponse } from "../../apis/types";
import { STOCK_ACTIONS } from "../../constants";
import { BestTradeType, StockTypeByMonth, Trade } from "../../types/stock.type";
import {
  getBestTradeActionType,
  getBestTradeDoneAction,
  getBestTradesActionType,
  getBestTradesDoneAction,
  getStocksByMonthDoneAction,
} from "../actions";

function* getStocksByMonth() {
  try {
    // TODO: change date from static to selected date
    const date = new Date("2022-01-01");
    const result: CustomAxiosResponse<StockTypeByMonth> = yield call(
      stockApi.getStocksByMonth,
      date
    );
    yield put(getStocksByMonthDoneAction(result.data.data));
  } catch (e) {
    console.log("error", e);
    // TODO: dispatch toast error
    // TODO: add toest config later
  }
}
function* getBestTrade(action: getBestTradeActionType) {
  try {
    const result: CustomAxiosResponse<Partial<BestTradeType<string>>> =
      yield call(stockApi.getBestTrade, action.payload, 100000);
    console.log("result", result);
    if (
      result.data.data.buyDate !== undefined &&
      result.data.data.sellDate !== undefined &&
      result.data.data.profit !== undefined &&
      result.data.data.buyPrice !== undefined &&
      result.data.data.sellPrice !== undefined
    ) {
      yield put(
        getBestTradeDoneAction({
          stockType: action.payload,
          trade: {
            ...result.data.data,
            sellDate: new Date(result.data.data.sellDate),
            buyDate: new Date(result.data.data.buyDate),
          } as BestTradeType,
        })
      );
    }
  } catch (e) {
    console.log("error", e);
  }
}

function* getBestTrades() {
  try {
    const result: CustomAxiosResponse<{
      trades: Trade<string>[];
      time: number;
    }> = yield call(stockApi.getBestTrades, 100000);
    console.log("result", result);
    if (result.data.data.trades !== undefined) {
      yield put(
        getBestTradesDoneAction({
          trades: result.data.data.trades.map((trade) => ({
            ...trade,
            date: new Date(trade.date),
          })),
          time: result.data.data.time,
        })
      );
    }
  } catch (e) {
    console.log("error", e);
  }
}

export default function* stockSaga() {
  yield takeLatest(STOCK_ACTIONS.GET_STOCKS_BY_MONTH, getStocksByMonth);
  yield takeEvery(STOCK_ACTIONS.GET_BEST_TRADE, getBestTrade);
  yield takeLatest(STOCK_ACTIONS.GET_BEST_TRADES, getBestTrades);
}
