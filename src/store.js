import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./Reducers/resume";

const store = configureStore({
  reducer: {
    resumes: resumeReducer,
  },
});

export default store;
