import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: []
}

export const Postlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPosts } = Postlice.actions

export default Postlice.reducer