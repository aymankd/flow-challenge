import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { stockReducer, StocksState } from "../reducers";
import rootSaga from "../saga/root.saga";

export interface RootStore {
  stocks: StocksState;
}

function createRootStore() {
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers({
    stocks: stockReducer,
  });
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat([sagaMiddleware]),
    devTools: process.env.NODE_ENV !== "production",
  });
  sagaMiddleware.run(rootSaga);
  return store;
}
export default createRootStore;
