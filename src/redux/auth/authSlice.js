import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, signUp } from './authOperations';
import { handleEntranceFulfilled, handleLogoutFulfilled, handleRefreshFulfilled, handleRefreshPending, handleRefreshRejected } from './authReducers';


const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, handleLogoutFulfilled)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, handleRefreshRejected)
      .addMatcher(
        isAnyOf(signUp.fulfilled, logIn.fulfilled),
        handleEntranceFulfilled
      );
  },
});

export const authReducer = authSlice.reducer;
