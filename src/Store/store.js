import { configureStore } from '@reduxjs/toolkit'
import ProfileSliceReducer from "./Features/ProfileSlice"
import ProfileAdminSliceReducer from "./Features/adminProfileSlice"
import LoaderReducer from "./Features/LoaderSlice"
import DataSlice from "./Features/DataSlice";

export const store = configureStore({
    reducer: {
        profile: ProfileSliceReducer,
        profileAdmin: ProfileAdminSliceReducer,
        loader: LoaderReducer,
        data: DataSlice,
    },
})