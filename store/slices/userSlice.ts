import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "@/models/user.model";
import { RootState } from "@/store/store";

interface UserState {
  username: string;
  accessToken: string;
  error?: string;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user?: UserData;
}

const initialState: UserState = {
  username: "kan",
  accessToken: "",
  isAuthenticated: false,
  isAuthenticating: true,
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetUsername: (state, action: any) => {
      state.username = action.payload.newUsername;
    },
  },
  extraReducers: (builder) => {},
});

export const { resetUsername } = userSlice.actions;

// export common user selector
export const userSelector = (store: RootState) => store.user;
export const isAuthenticatedSelector = (store: RootState): boolean =>
  store.user.isAuthenticated;

// // export reducer
export default userSlice.reducer;