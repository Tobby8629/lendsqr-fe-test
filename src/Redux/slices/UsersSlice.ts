import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import store from "../store";

// interface User {
//     id: number;
//     name: string;
//   }

interface UsersState {
    users: [];
    loading: boolean;
    error: {};
  }

const fetchUsers = createAsyncThunk('users/fetchusers', async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const response = await fetch(apiUrl as string);
    const data = await response.json();
    return data;
});

const initialState: UsersState = {
    users: [], 
    loading: false,
    error: {},
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}, // No need for extra reducers if you're using createAsyncThunk
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error
            });
    }
});

export { fetchUsers }; // Export the async thunk
export default usersSlice.reducer; // Export the reducer
export type AppDispatch = typeof store.dispatch;