import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";

export default function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <div className="ExpenseItem ">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.name}
        <span className="badge badge-primary badge-pill mr-3">
          ${props.cost}
          <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
        </span>
      </li>
    </div>
  );
}
