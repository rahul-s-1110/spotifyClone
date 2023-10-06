import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    collegeData:{} 
}

export const getCollegeData = createAsyncThunk('getCollegeData',async(body) =>{
    return axios.post("base url"+"Endurl",body,{
        headers:{
            Accept:'application/json',
        },
    })
    .then(res =>{
        return res.data;
    })
    .catch(err =>{
        return err?.response?.data;
    })
})

const userManagementSlice = createSlice({
    name:"userManager",
    initialState,
    reducers:{
        ResetCollegeData : state =>{
            state.collegeData = {};
        },
    },
    extraReducers: builder =>{
        builder.addCase(getCollegeData.pending,state =>{
            // showLoader()
        })
        builder.addCase(getCollegeData.fulfilled,(state,{payload})=>{
            // hideLoader();
            state.collegeData = payload;
        }),
        builder.addCase(getCollegeData.rejected,state =>{
            // hideLoader();
        })
    }
})

export const {
    ResetCollegeData,
} = userManagementSlice.actions;

export const collegeData = state => state.userManager.collegeData;

export default userManagementSlice.reducer;