import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  email: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginWithGoogle: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
    logoutFromState: (state) => {
      state.userName = null;
      state.email = null;
    },
  },
});

export const { loginWithGoogle, logoutFromState } = userSlice.actions;

export const selectUserName = (state) => state.user.userName;
export const selectEmail = (state) => state.user.email;

export default userSlice.reducer;
