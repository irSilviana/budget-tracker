import React from "react";
import { TiDelete } from "react-icons/ti";

export default function ExpenseItem(props) {
  return (
    <div className="ExpenseItem ">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.name}
        <span className="badge badge-primary badge-pill mr-3">
          ${props.cost}
          <TiDelete size="1.5em"></TiDelete>
        </span>
      </li>
    </div>
  );
}
