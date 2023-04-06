import { RootStore } from "../store/root.store";

export const stocksSelector = (state: RootStore) => state.stocks;
