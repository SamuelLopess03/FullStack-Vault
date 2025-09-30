import { Download, Mail } from "lucide-react";
import moment from "moment";

import TransactionInfoCard from "./TransactionInfoCard";

const IncomeList = ({ transactions, onDelete }) => {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Income Sources</h5>

        <div className="flex items-center justify-end gap-2">
          <button className="card-btn">
            <Mail size={15} className="text-base" />{" "}
            <span className="text-sm font-medium">Email</span>
          </button>
          <button className="card-btn">
            <Download size={15} className="text-base" />{" "}
            <span className="text-sm font-medium">Download</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {transactions?.map((income) => (
          <TransactionInfoCard
            key={income.id}
            title={income.name}
            icon={income.icon}
            date={moment(income.date).format("Do MMM YYYY")}
            amount={income.amount}
            type={"income"}
            onDelete={() => onDelete(income.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
