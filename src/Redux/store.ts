import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./slices/UsersSlice";

const store = configureStore({
    reducer: {
      user:  UsersSlice,
    }
})

export default store