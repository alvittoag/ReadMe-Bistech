import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface toogleState {
  auth: boolean;
  chooseAuth: string;
  pinjam: boolean;
}

const initialState: toogleState = {
  auth: false,
  chooseAuth: "Masuk",
  pinjam: false,
};

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
    tooglePinjam: (state, action: PayloadAction<boolean>) => {
      state.pinjam = action.payload;
    },
  },
});

export const { toogleAuth, toogleChooseAuth, tooglePinjam } =
  toogleSlice.actions;

export const toogleReducer = toogleSlice.reducer;
