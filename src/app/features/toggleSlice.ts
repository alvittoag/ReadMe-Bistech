import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface toogleState {
  auth: boolean;
  chooseAuth: string;
}

const initialState: toogleState = { auth: false, chooseAuth: "Masuk" };

const toogleSlice = createSlice({
  name: "toogle",
  initialState,
  reducers: {
    toogleAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    toogleChooseAuth: (state, action: PayloadAction<string>) => {
      state.chooseAuth = action.payload;
    },
  },
});

export const { toogleAuth, toogleChooseAuth } = toogleSlice.actions;

export const toogleReducer = toogleSlice.reducer;
