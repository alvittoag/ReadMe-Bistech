import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface userState {
//   name: string;
//   password: string;
//   email: string;
// }

interface userState {
  isLogin: boolean;
  isActive: string;
}

const initialState: userState = { isLogin: false, isActive: "Home" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    addActive: (state, action: PayloadAction<string>) => {
      state.isActive = action.payload;
    },
  },
});

export const { addUser, addActive } = userSlice.actions;

export const userReducer = userSlice.reducer;
