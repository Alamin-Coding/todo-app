import { createSlice } from "@reduxjs/toolkit"

// import { v4 as uuidv4 } from 'uuid';
// const initialState = {
//   id: uuidv4,
//   text: ''
// }

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    // addTodo: (state, action) => void(state.push(action.payload)),
    // deleteTodo: (state, action) => void(state.splice(action.payload, 1)) 
    addTodo(state, action) {
      state.push(action.payload)
    },
    deleteTodo(state, action) {
      state.splice(action.payload, 1)
    },
    updateTodo(state, action) {
      const newText = action.payload;
      const [text, id] = newText
      state[id] = text;
    },

  },
  // extraReducers(builder) {  //extraReducers without action creator
  //   builder.addCase(todoSlice.actions.deleteAll, () => [])
  // }
  extraReducers(builder) {   //extraReducers with action creator
    builder.addCase("clearAllData", () => [])
  }
})


export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;
