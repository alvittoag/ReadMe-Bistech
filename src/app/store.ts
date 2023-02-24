import { configureStore } from "@reduxjs/toolkit";
import { toogleReducer } from "./features/toggleSlice";
import { userReducer } from "./features/userSlices";

export const store = configureStore({
  reducer: {
    user: userReducer,
    toogle: toogleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
