import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "@/models/user.model";
import { RootState } from "@/store/store";
import * as serverService from "@/services/serverService";

interface UserState {
  username: string;
  accessToken: string;
  error?: string;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user?: UserData;
}

interface SingleProp {
  data: string;
}

const initialState: UserState = {
  username: "kan",
  accessToken: "",
  isAuthenticated: false,
  isAuthenticating: true,
  user: undefined,
};

interface SignAction {
  username: string;
  password: string;
}

export const signUp = createAsyncThunk(
  "user/signup",
  async (credential: SignAction) => {
    const response = await serverService.signUp(credential);
    return response;
  }
);

export const signIn = createAsyncThunk(
  "user/signin",
  async (credential: SignAction) => {
    const p1 = new Promise((res) =>
      setTimeout(() => res({ result: "singin success" }), 3000)
    );
    return await p1;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetUsername: (state, action: PayloadAction<SingleProp>) => {
      state.username = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.username = action.payload.result;
    });
    builder.addCase(signIn.fulfilled, (state, action: any) => {
      state.username = action.payload.result;
    });
  },
});

export const { resetUsername } = userSlice.actions;

// export common user selector
export const userSelector = (store: RootState) => store.user;
export const isAuthenticatedSelector = (store: RootState): boolean =>
  store.user.isAuthenticated;

// // export reducer
export default userSlice.reducer;
