import { userSlice } from "@/entities/user/model/userSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
  }),
});
