import React, { useEffect } from "react";
import { ChartDataset, Point } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { Chart } from "../../components/Chart";
import {
  getBestTradeAction,
  getStocksByMonthAction,
} from "../../redux/actions";
import { stocksSelector } from "../../redux/selectors/stock.selector";
import {
  BestTradeType,
  StockType,
  StockTypeByMonth,
} from "../../types/stock.type";
import { toCompleteFrenchDateformat } from "../../helpers/date.helper";

const getDataFromStocksTypeByMonth = (
  stocksTypeByMonth: StockTypeByMonth,
  type: StockType
) => {
  return (stocksTypeByMonth[type] ?? []).map((item) => item.month_price);
};

export default function ChartPage() {
  const dispatch = useDispatch();
  const state = useSelector(stocksSelector);
  const data: ChartDataset<"line", (number | Point | null)[]>[] = [
    {
      label: "Amazon",
      data: getDataFromStocksTypeByMonth(
        state.StocksTypeByMonth,
        StockType.AMAZON
      ),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.2,
    },
    {
      label: "Google",
      data: getDataFromStocksTypeByMonth(
        state.StocksTypeByMonth,
        StockType.GOOGLE
      ),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.2,
    },
  ];

  const bestTrade = (type: StockType, bestTradeType: BestTradeType) => (
    <h2>
      {type === StockType.AMAZON ? "Ayman" : "Anouar"} devrait acheter 100 000 €
      d&apos;action {type === StockType.AMAZON ? "Amazon" : "Google"} le{" "}
      {toCompleteFrenchDateformat(bestTradeType.buyDate)} au prix de{" "}
      {bestTradeType.buyPrice} €. il devrait ensuite vendre ces actions le{" "}
      {toCompleteFrenchDateformat(bestTradeType.sellDate)} au prix de{" "}
      {bestTradeType.sellPrice} € pour faire un gain de{" "}
      {bestTradeType.profit.toFixed(2)} €.
    </h2>
  );
  useEffect(() => {
    dispatch(getStocksByMonthAction());
    dispatch(getBestTradeAction(StockType.AMAZON));
    dispatch(getBestTradeAction(StockType.GOOGLE));
  }, [dispatch]);

  return (
    <>
      <Chart data={data} />
      <div>
        {state.bestTrade.amazon &&
          bestTrade(StockType.AMAZON, state.bestTrade.amazon)}
      </div>
      <div>
        {state.bestTrade.google &&
          bestTrade(StockType.GOOGLE, state.bestTrade.google)}
      </div>
    </>
  );
}
