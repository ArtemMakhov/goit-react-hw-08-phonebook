import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from './operations';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: {
        [register.pending](state) { return state; },
         [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [register.rejected](state, action) {
            return state;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;   
        },
        [logOut.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = false;
            state.isLoggedIn = false;
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload; 
            state.isLoggedIn = true;
        }
},
});

export const authReduser = authSlice.reducer;


// builder => 
//         builder 
//             .addCase(register.pending, (state, action) => state)
//             .addCase(register.fulfilled, (state, action) => state)
//     .addCase(register.rejected, (state, action) => state)