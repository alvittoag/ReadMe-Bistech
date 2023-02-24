import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface userState {
//   name: string;
//   password: string;
//   email: string;
// }

interface userState {
  isLogin: boolean;
}

const initialState: userState = { isLogin: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
