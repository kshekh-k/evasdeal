import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";
import userReducer from "./reducers/user";
import { useDispatch, useSelector } from "react-redux";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      user: userReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
