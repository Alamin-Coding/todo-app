import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/TodoSlice";


const store = configureStore({
 reducer: {
  todoList: todoSlice
 }
});

export default store;