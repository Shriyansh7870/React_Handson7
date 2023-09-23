import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { name: "Shriyansh", age: 30, course: "Mern", batch: "EA20" },
  { name: "Monu", age: 20, course: "Mern", batch: "EA24" },
  { name: "Puja", age: 40, course: "Mern", batch: "EA23" },
  { name: "Rahul", age: 18, course: "Mern", batch: "EA22" },
  { name: "Raushan", age: 34, course: "Mern", batch: "EA21" },
];

const StudentSlice = createSlice({
  name: "stu_Data",
  initialState,
  reducers: {
    editStudent: (state, action) => {
      state[action.payload.index] = action.payload.info;
    },
    addStudent: (state, action) => {
      state.push(action.payload.info);
    },
  },
});
export const { editStudent, addStudent } = StudentSlice.actions;
export default StudentSlice.reducer;
