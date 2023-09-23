import { configureStore } from "@reduxjs/toolkit";
import StudnetSlice from "../Slice/Slice";
const store = configureStore({
  reducer: {
    Stu_Data: StudnetSlice,
  },
});
export default store;
