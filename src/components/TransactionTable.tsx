import { toEuroFormat } from "../helpers/currency.helper";
import { toFrenchDateformat } from "../helpers/date.helper";
import { ActionType, Trade } from "../types/stock.type";
import { AiOutlineInfoCircle } from "react-icons/ai";

export type TableProp = {
  children: React.ReactNode;
};
export const Table: React.FC<TableProp> = ({ children }) => (
  <div className="overflow-x-scroll w-full h-96">
    <table className="table-auto border-separate w-full">{children}</table>
  </div>
);

export const TableLoading: React.FC = () => (
  <div className="flex justify-center items-center h-96 w-full">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
);

export const TableHeader: React.FC = () => (
  <thead className="bg-gray-600 text-white">
    <tr>
      <th>DATE</th>
      <th>ACTION</th>
      <th>NOM</th>
      <th>PRIX UNITAIRE</th>
      <th>NOMBRE D'ACTION</th>
      <th>
        <div className="flex items-center justify-center gap-3">
          PORTEFEUILLE
          <div className="has-tooltip">
            <span className="tooltip rounded shadow-lg p-1 bg-gray-600 text-white text-xs -mt-8 -ml-20">
              Le portefeuille est le montant d'argent restant après avoir
              effectué l'achat ou la vente d'actions plus la valeur marchande
              des actions acheter.
            </span>
            <AiOutlineInfoCircle />
          </div>
        </div>
      </th>
    </tr>
  </thead>
);

export type TableRowProp = {
  trade: Trade;
};
export const TableRow: React.FC<TableRowProp> = ({ trade }) => (
  <tr className="bg-gray-200 text-black">
    <td>{toFrenchDateformat(trade.date)}</td>
    {trade.actionType === ActionType.BUY ? (
      <td className="text-green-600"> Achat </td>
    ) : (
      <td className="text-red-600"> Vente </td>
    )}
    <td>{trade.stockType}</td>
    <td>{toEuroFormat(trade.price)}</td>
    <td>{trade.quantity}</td>
    <td>{toEuroFormat(trade.wallet)}</td>
  </tr>
);

export type TableDataProp = {
  data: Trade[];
};
export const TransactionTable: React.FC<TableDataProp> = ({ data }) => (
  <Table>
    <TableHeader />
    <tbody className="overflow-auto h-96">
      {data.map((trade, index) => (
        <TableRow key={index} trade={trade} />
      ))}
    </tbody>
  </Table>
);
