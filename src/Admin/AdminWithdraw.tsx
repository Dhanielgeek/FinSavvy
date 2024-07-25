import { FaEye } from "react-icons/fa";

const AdminWithdraw = () => {
  return (
    <div className="w-full h-[100%] scrollbar overflow-y-scroll">
      <div className="w-full h-[10%] flex justify-around items-start px-5 flex-col">
        <p className="text-3xl font-bold text-gray-500 phone:text-xl">
          Manage clients Withdraws
        </p>
      </div>
      <div className="w-full h-[15%] flex justify-between px-5 items-center phone:flex-col phone:h-[23%]">
        <div className="w-[30%] h-[100%] flex justify-around items-center phone:w-[100%]">
          <button className="w-[30%] h-[50%] text-white font-semibold bg-green-500 rounded-md">
            Copy
          </button>
          <button className="w-[30%] h-[50%] text-white font-semibold bg-red-500 rounded-md">
            CSV
          </button>
          <button className="w-[30%] h-[50%] text-white font-semibold bg-blue-500 rounded-md">
            Print
          </button>
        </div>
        <div className="w-[30%] h-[100%] flex justify-center items-center phone:w-[100%]">
          <input
            type="text"
            placeholder="Search"
            className="w-[80%] h-[60%] rounded-md px-5 border outline-none"
          />
        </div>
      </div>
      <div className="w-full px-5 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Client Name</th>
              <th className="p-3 border">Amount Requested</th>
              <th className="p-3 border">Amount + Charges</th>
              <th className="p-3 border">Payment Method</th>
              <th className="p-3 border">Receiver's Email</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Date Created</th>
              <th className="p-3 border">Option</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">1</td>
              <td className="p-3 border">John Doe</td>
              <td className="p-3 border">$500</td>
              <td className="p-3 border">$520</td>
              <td className="p-3 border">Credit Card</td>
              <td className="p-3 border">john@example.com</td>
              <td className="p-3 border">
                <span className="bg-yellow-500 text-white px-2 py-1 rounded">
                  Pending
                </span>
              </td>
              <td className="p-3 border">2023-06-01</td>
              <td className="p-3 border flex justify-around">
                <button className="text-blue-500">
                  <FaEye />
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-3 border">2</td>
              <td className="p-3 border">Jane Smith</td>
              <td className="p-3 border">$300</td>
              <td className="p-3 border">$315</td>
              <td className="p-3 border">PayPal</td>
              <td className="p-3 border">jane@example.com</td>
              <td className="p-3 border">
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  Approved
                </span>
              </td>
              <td className="p-3 border">2023-06-02</td>
              <td className="p-3 border flex justify-around">
                <button className="text-blue-500">
                  <FaEye />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminWithdraw;
