import React, { createContext, useContext, useReducer } from "react";

//This is DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we use it inside of  a component
export const useStateValue = () => useContext(StateContext);
//Hook which allows us to pull information from the datalayer..
