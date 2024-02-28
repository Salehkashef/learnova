import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/instance";

export const getCourses = createAsyncThunk("Courses/getAllCourse", async () => {
    let data = await axiosInstance.get("");
    return data.data.Courses;
})

const CourseSlice =createSlice({
    name:"Course",
    initialState:{
     card:[]
    },
    reducers:{
        addToCard:(state,action) =>{
            let index = state.card.findIndex((item)=>item.id==action.payload.id);
            if(index >= 0){
                  alert('add')
            }else
            state.card.push(action.payload)
        }
    }

})

export const {increaseCounter}= CourseSlice.actions;
export default CourseSlice.reducer;