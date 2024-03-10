import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Axios/interceptor";
const getInstructorData = createAsyncThunk("/instructor", async () => {
  const response = await axiosInstance.get(
    `http://localhost:4000/user/instructor/65ed4cddf5bde2557093c79e`
  );

  return response;
});

const instructorSlice = createSlice({
  name: "instructor",
  initialState: {
    instructor: {},
    loading: false,
    error: null,
  },
  reducer: {},

  extraReducers: (builder) => {
    builder.addCase(getInstructorData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getInstructorData.fulfilled, (state, action) => {
      state.instructor = action.payload;
    });
    builder.addCase(getInstructorData.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export default instructorSlice.reducer;
