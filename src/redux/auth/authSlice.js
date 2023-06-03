import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  logOut,
  refreshUser,
  register,
  updateUser,
  subscribe,
} from './authThunks';
import { toast } from 'react-toastify';

const initialState = {
  user: { name: null, email: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
  isLoadingGoogle: false,
  status: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        toast.error(action.payload);
        state.isLoading = false;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.status = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.status = false;
      })
      .addCase(login.rejected, (state, action) => {
        toast.error(action.payload);
        state.isLoading = false;
        state.status = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, avatarURL: null };
        state.isLoggedIn = false;
        state.token = null;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        toast.success('Updated successfully');
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isRefreshing = false;
        toast.error(action.payload);
      })
      .addCase(subscribe.pending, state => {
        state.isLoading = true;
      })
      .addCase(subscribe.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success('Thank you for subscribing to our news.');
      })
      .addCase(subscribe.rejected, (state, action) => {
        state.isRefreshing = false;
        toast.warn(action.payload);
      })
      .addDefaultCase((state, action) => {
        if (action.error) {
          if (action.payload === 'Not authorized') {
            state.isLoggedIn = false;
            state.token = null;
          }
          state.error = action.payload;
          toast.error(action.payload);
        }
      }),
});

export const authReducer = authSlice.reducer;

//!____________________________________
// import { createSlice } from '@reduxjs/toolkit';

// import {
//   getCurrentUser,
//   getUserBalance,
//   loginUser,
//   logoutUser,
//   registerUser,
// } from './authThunks';
// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: {
//       id: '',
//       username: '',
//       email: '',
//       balance: 0,
//     },
//     token: null,
//     isLoading: true,
//     isRefreshing: false,
//     isModalAddTransactionOpen: false,
//     error: null,
//   },
//   reducers: {
//     balanceUpdate(state, action) {
//       state.user.balance = action.payload;
//     },
//     setModalAddTransactionOpen: (state, action) => {
//       state.isModalAddTransactionOpen = action.payload;
//     },
//   },
//   extraReducers: {
//     [registerUser.pending]: handlePending,
//     [loginUser.pending]: handlePending,
//     [getCurrentUser.pending]: handlePending,
//     [logoutUser.pending]: handlePending,

//     [registerUser.rejected]: handleRejected,
//     [loginUser.rejected]: handleRejected,
//     [getCurrentUser.rejected]: handleRejected,
//     [logoutUser.rejected]: handleRejected,

//     [registerUser.fulfilled]: (state, { payload }) => {
//       return {
//         ...state,
//         ...payload,
//         isLoading: false,
//         error: null,
//       };
//     },
//     [loginUser.fulfilled]: (state, { payload }) => {
//       return {
//         ...state,
//         ...payload,
//         isLoading: false,
//         error: null,
//       };
//     },
//     [getCurrentUser.fulfilled]: (state, { payload }) => {
//       return {
//         ...state,
//         user: payload,
//         error: null,
//         isRefreshing: false,
//       };
//     },
//     [getUserBalance.fulfilled]: (state, { payload }) => {
//       return {
//         ...state,
//         user: payload,
//         error: null,
//         isRefreshing: false,
//       };
//     },
//     [getCurrentUser.pending]: (state, { payload }) => {
//       return {
//         ...state,
//         error: null,
//         isRefreshing: true,
//       };
//     },
//     [getCurrentUser.rejected]: (state, { payload }) => {
//       return {
//         ...state,
//         error: payload,
//         isRefreshing: false,
//       };
//     },
//     [logoutUser.fulfilled]: (state, { payload }) => {
//       return {
//         user: {
//           id: '',
//           username: '',
//           email: '',
//           balance: 0,
//         },
//         isLoading: false,
//         error: null,
//         isRefreshing: false,
//         token: null,
//       };
//     },
//   },
// });

// export const { balanceUpdate, setModalAddTransactionOpen } = authSlice.actions;

// export default authSlice.reducer;
