import { authSlice } from "@/entities/auth/model/authSlice";
import { storySlice } from "@/entities/story/model/storySlice";
import { themeSlice } from "@/entities/theme/model/themeSlice";
import { userSlice } from "@/entities/user/model/userSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
    story: storySlice.reducer,
  }),
});

// Define RootState type, which is the type of the entire Redux state tree
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type, which is the type of the dispatch function
export type AppDispatch = typeof store.dispatch;
