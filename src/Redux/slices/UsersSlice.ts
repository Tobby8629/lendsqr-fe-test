import { createAsyncThunk, createSlice,  PayloadAction } from "@reduxjs/toolkit";
import store from "../store";
import { DashboardData } from "../../components/Main/utils/DashboardData";
import { User_info, information, user } from "../../components/Main/utils/Interface";

interface UsersState {
    users: user[];
    loading: boolean;
    error: {};
    newUserData: information[];
    info: user | any;
  }

const fetchUsers = createAsyncThunk('users/fetchusers', async (id?: string) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const response = await fetch(apiUrl as string);
    const data = await response.json();
    return{data: data, id: id};
});

const initialState: UsersState = {
    users: [] , 
    loading: false,
    error: {},
    newUserData: [],
    info: {
        id: "",
        organization: "",
        user: "",
        phone_number: "",
        Guarantors: [],
        bvn: 0,
        children: false,
        date_joined: "",
        education: "",
        email: "",
        employed: false, 
        facebook: "",
        full_name: "",
        gender: "",
        instagram: "",
        job_duration: 0,
        job_sector: "",
        loan_repay: 0,
        martial_status: "",
        monthly_income: 0,
        residence_type: "",
        status: "",
        twitter: "",
        Amount: 0,
    account_number: 0,
    bank: "string",
    serial: "string",
    }
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        // findUser: (state, action: PayloadAction<any>) => {
        // fetchUsers()
        //  const data = state.users.find((user) => user.id === action.payload);
        //  state.info = data
        // }
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.data.users;
                action.payload.id && (state.info = state.users.find(u => u.id === action.payload.id))
                state.newUserData = DashboardData(state.users);
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error
            });
    
    }
});

export { fetchUsers }; // Export the async thunk
export default usersSlice.reducer; // Export the reducer
// export const {findUser} = usersSlice.actions
export type AppDispatch = typeof store.dispatch;