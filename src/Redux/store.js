import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from "./slices/courseslice";
import CategoryReducer from "./slices/categorySlice";
import CategoryCourseReducer from "./slices/catCourseSlice";
export const store = configureStore({
  reducer: {
    CourseReducer,
    CategoryReducer,
    CategoryCourseReducer,
  },
});
