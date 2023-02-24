import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  auth: boolean;
  chooseAuth: string;
}

const initialState: userState = { auth: false, chooseAuth: "Masuk" };

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
