import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.user = action.payload;
        },
        setUserProfile: (state, action) => {
            state.userProfile = action.payload;
        },
    }
});
export const {
    setAuthUser,
    setUserProfile,
} = authSlice.actions;
export default authSlice.reducer;