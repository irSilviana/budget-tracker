import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";

export default function ExpenseList() {
  // const expenses = [
  //   { id: 123345, name: "Shopping", cost: 50 },
  //   { id: 123345, name: "Holiday", cost: 350 },
  //   { id: 123345, name: "Transportation", cost: 75 },
  //   { id: 123345, name: "Fuel", cost: 40 },
  //   { id: 123345, name: "Child Care", cost: 50 },
  // ];

  const { expenses } = useContext(AppContext);

  return (
    <div className="ExpenseList">
      <ul className="list-group">
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
  );
}
