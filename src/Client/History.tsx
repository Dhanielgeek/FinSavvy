import React, { useEffect, useMemo } from "react";
import { useTable, Column } from "react-table";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setUserTransactions } from "../Global/Slice";

interface Transaction {
  _id: string;
  amount: string;
  mode: string;
  status: string;
  createdAt: string;
}

const History: React.FC = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state: any) => state.user.token);
  const transactions =
    useSelector((state: any) => state.user.userTransactions) || [];

  const getHistory = async () => {
    const url = `${import.meta.env.VITE_DEVE_URL}/api/user/history`;
    const headers = {
      Authorization: `Bearer ${userToken}`,
    };
    try {
      const response = await axios.get(url, { headers });
      if (Array.isArray(response.data.data)) {
        dispatch(setUserTransactions(response.data.data));
      } else {
        console.error("Unexpected data format:", response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userToken) {
      getHistory();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, userToken]);

  const columns: Column<Transaction>[] = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
        Cell: ({ value }) => <span>{value.slice(0, 5)}</span>,
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Payment Mode",
        accessor: "mode",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <span
            className={
              value === "approved"
                ? "bg-green-500 text-white px-2 py-1 rounded"
                : value === "declined"
                ? "bg-red-500 text-white px-2 py-1 rounded"
                : "bg-yellow-500 text-white px-2 py-1 rounded"
            }
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Date Created",
        accessor: "createdAt",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: transactions,
    });

  return (
    <div className="bg-[#101829] p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-slate-200">
        Transaction History
      </h2>
      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200"
        >
          <thead className="bg-gray-50">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white divide-y divide-gray-200"
          >
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
