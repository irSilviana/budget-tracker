import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const expenses = [
    { id: 123345, name: "Shopping", cost: 50 },
    { id: 123345, name: "Holiday", cost: 350 },
    { id: 123345, name: "Transportation", cost: 75 },
    { id: 123345, name: "Fuel", cost: 40 },
    { id: 123345, name: "Child Care", cost: 50 },
  ];

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
