import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function ExpenseTotal() {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="ExpenseTotal alert alert-primary">
      <span>Spent so far: ${totalExpenses}</span>
    </div>
  );
}
