import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e"
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        reset: () => initialState
    }
})

export const { setMode, reset } = globalSlice.actions
export default globalSlice.reducer