import { call, put, takeLatest } from "redux-saga/effects";
import { stockApi } from "../../apis";
import { CustomAxiosResponse } from "../../apis/types";
import { STOCK_ACTIONS } from "../../constants";
import { StockTypeByMonth } from "../../types/stock.type";
import { getStocksByMonthDoneAction } from "../actions";

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

export default function* stockSaga() {
  yield takeLatest(STOCK_ACTIONS.GET_STOCKS_BY_MONTH, getStocksByMonth);
}
