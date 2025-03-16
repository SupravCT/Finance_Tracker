import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getTransaction } from "../services/transaction/transcationService";
import { useQuery } from "@tanstack/react-query";

ChartJS.register(ArcElement, Tooltip, Legend);

const TransactionChart = () => {
  const { data, isError, isFetched, refetch, error } = useQuery({
    queryFn: getTransaction,
    queryKey: ["Get Transaction"],
  });

  const totals = data.reduce(
    (acc, transactiom) => {
      if (transactiom?.type === "income") {
        acc.income = acc.income + transactiom?.amount;
      } else {
        acc.expense = acc.expense + transactiom?.amount;
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );
 
  const data={
    labels:['Income',"Expense"],
    datasets:{
      label:"Transaction",
      data:[totals.income,totals.expense],
      backgroundColor:["green","red"],
      borderColor:["green","red"],
      borderWidth:1
    }
  }
  
  return (
    <div className="my-8 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-center mb-6">
        Transaction Overview
      </h1>
      <div style={{ height: "350px" }}>
        {" "}
        <Doughnut data={data}/>
      </div>
    </div>
  );
};

export default TransactionChart;
