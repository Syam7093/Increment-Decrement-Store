// import {configureStore,combineReducers} from "@reduxjs/toolkit"
// import { incSlice } from "../slices/incSlice"

// const reducer=combineReducers({
//    reusableStore:incSlice.reducer
// })

// export const store=configureStore({
//     reducer:reducer
// })

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { incSlice } from "../slices/incSlice";

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const reducer = combineReducers({
  reusableStore: incSlice.reducer,
});

const preloadedState = loadState();

const store = configureStore({
  reducer,
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export { store };
