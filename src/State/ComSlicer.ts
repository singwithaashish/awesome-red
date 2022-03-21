import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    commentOpen: false,
    post_url: "",
    
};

export const ComSlicer = createSlice({
    name: "comment",
    initialState,
    reducers: {
        toggleComment: (state) => {
            state.commentOpen = !state.commentOpen;
        } ,
        setUrl: (state, {payload: url}) => {
            state.post_url = url;
        }
    }
});

export const { toggleComment, setUrl } = ComSlicer.actions;

export default ComSlicer.reducer;