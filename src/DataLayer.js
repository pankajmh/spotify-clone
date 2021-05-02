import { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext();

//here children is component under <DataLayer> ie here <App /> in index.js
export const DataLayer = ({ initialState, reducer, children }) => (
 <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
  {children}
 </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
