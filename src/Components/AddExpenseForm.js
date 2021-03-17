import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";

export default function AddExpenseForm() {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const expense = { id: uuidv4(), name: name, cost: parseInt(cost) };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  }

  return (
    <div className="AddExpenseForm">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm">
            <label for="name">Name</label>
            <input
              type="text"
              required="required"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="col-sm">
            <label for="cost">Cost</label>
            <input
              type="text"
              required="required"
              className="form-control"
              id="cost"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </div>
        </div>
        <div className="row mt-3 position-relative ">
          <div className="col-sm">
            <button
              type="submit"
              className="btn btn-primary end-0"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
