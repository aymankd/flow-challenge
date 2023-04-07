import { formatDate } from "../helpers/date.helper";
import { ActionType, Trade } from "../types/stock.type";

const headers = [
  "DATE",
  "ACTION",
  "NOM",
  "PRIX UNITAIRE",
  "NOMBRE D'ACTION",
  "PORTEFEUILLE",
];

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

export type TableHeaderProp = {
  headers: string[];
};
export const TableHeader: React.FC<TableHeaderProp> = ({ headers }) => (
  <thead className="bg-gray-600 text-white">
    <tr>
      {headers.map((header) => (
        <th key={header}>{header}</th>
      ))}
    </tr>
  </thead>
);

export type TableRowProp = {
  trade: Trade;
};
export const TableRow: React.FC<TableRowProp> = ({ trade }) => (
  <tr className="bg-gray-200 text-black">
    <td>{formatDate(trade.date)}</td>
    {trade.actionType === ActionType.BUY ? (
      <td className="text-green-600"> Achat </td>
    ) : (
      <td className="text-red-600"> Vente </td>
    )}
    <td>{trade.stockType}</td>
    <td>{trade.price}</td>
    <td>{trade.quantity}</td>
    <td>{trade.wallet}</td>
  </tr>
);

export type TableDataProp = {
  data: Trade[];
};
export const TransactionTable: React.FC<TableDataProp> = ({ data }) => (
  <Table>
    <TableHeader headers={headers} />
    <tbody className="overflow-auto h-96">
      {data.map((trade, index) => (
        <TableRow key={index} trade={trade} />
      ))}
    </tbody>
  </Table>
);
