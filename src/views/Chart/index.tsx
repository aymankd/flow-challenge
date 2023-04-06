import React, { useEffect } from "react";
import { ChartDataset, Point } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { Chart } from "../../components/Chart";
import { getStocksByMonthAction } from "../../redux/actions";
import { stocksSelector } from "../../redux/selectors/stock.selector";
import { StockType, StockTypeByMonth } from "../../types/stock.type";

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

  useEffect(() => {
    dispatch(getStocksByMonthAction());
  }, [dispatch]);

  return (
    <div>
      <Chart data={data} />
    </div>
  );
}
