import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

const initialState = {
  user: null,
  basket: [],
  products: [],
  searchTerm: "", 
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};