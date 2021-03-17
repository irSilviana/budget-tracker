import { createContext, useReducer } from "react";

function AppReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initialState = {
  budget: 2000,
  expenses: [
    {
      id: 12,
      name: "Shoppping",
      cost: 40,
    },
    {
      id: 13,
      name: "Holiday",
      cost: 80,
    },
  ],
};

export const AppContext = createContext();

export function AppProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
