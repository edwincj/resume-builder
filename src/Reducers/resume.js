import { createSlice } from "@reduxjs/toolkit";
import FAKE_DATA from "../Constants/FakeData";

export const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    resumeList: FAKE_DATA,
    selectedResume: {},
  },
  reducers: {
    getSingleResume: (state, action) => {
      state.selectedResume = state.resumeList.find(resume => {
        return resume.id === action.payload;
      });
    },
    addResume: (state, action) => {
      state.selectedResume = action.payload;
      state.resumeList.push(action.payload);
    },
    deleteResume: (state, action) => {
      state.resumeList = state.resumeList.filter(
        resume => resume.id !== action.payload
      );
    },
    updateResume: (state, action) => {
      const index = state.resumeList.findIndex(
        resume => resume.id === action.payload.id
      );
      state.resumeList[index] = action.payload;
      state.selectedResume = action.payload;
    },
  },
});

export const { getSingleResume, addResume, deleteResume, updateResume } =
  resumeSlice.actions;

export default resumeSlice.reducer;
