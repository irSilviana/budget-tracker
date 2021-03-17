import React from "react";

export default function AddExpenseForm() {
  return (
    <div className="AddExpenseForm">
      <form>
        <div className="row">
          <div className="col-sm">
            <label for="name">Name</label>
            <input
              type="text"
              required="required"
              className="form-control"
              id="name"
            />
          </div>
          <div className="col-sm">
            <label for="cost">Cost</label>
            <input
              type="text"
              required="required"
              className="form-control"
              id="cost"
            />
          </div>
        </div>
        <div className="row mt-3 position-relative ">
          <div className="col-sm">
            <button type="submit" className="btn btn-primary end-0">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
