import { all, fork } from "redux-saga/effects";
import stockSaga from "./stock.saga";

export default function* rootSaga() {
  yield all([fork(stockSaga)]);
}
