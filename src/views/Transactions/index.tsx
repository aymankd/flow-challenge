import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TableLoading,
  TransactionTable,
} from "../../components/TransactionTable";
import { getBestTradesAction } from "../../redux/actions";
import { stocksSelector } from "../../redux/selectors/stock.selector";

export default function Transactions() {
  const state = useSelector(stocksSelector);
  const dispatch = useDispatch();
  const minutes = state.executionTime
    ? Math.floor(state.executionTime / 60000)
    : null;
  const seconds = state.executionTime
    ? (state.executionTime / 1000).toFixed(3)
    : null;

  useEffect(() => {
    dispatch(getBestTradesAction());
  }, [dispatch]);
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl">Meilleur moment pour acheter et pour vendre</h1>
      <div className="flex flex-col items-start gap-10">
        <h1 className="text-xl">List des achats et ventes quotidien d'Erwan</h1>
        {state.bestTradesIsLoading ? (
          <TableLoading />
        ) : (
          <>
            <TransactionTable data={state.bestTrades} />
            {state.executionTime ? (
              <h1 className="text-xl">
                Temps total d'execution :{" "}
                {minutes && minutes === 0
                  ? `${minutes.toFixed(3)} minutes et `
                  : ""}
                {seconds} secondes
              </h1>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
