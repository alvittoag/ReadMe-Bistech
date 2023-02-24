import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  name: string;
  password: string;
  email: string;
}

const initialState: userState[] = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
