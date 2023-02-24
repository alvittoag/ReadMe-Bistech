import { createSlice } from "@reduxjs/toolkit";
import { books } from "../../constant/datas";

export interface BooksState {
  id: string;
  title: string;
  img: string;
  isLiked: boolean;
}

const initialState: BooksState[] = [];

export const booksSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addFavorit: (state, action) => {
      state.push(action.payload);
    },
  },
});
