import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    isOpen: false
}
const sidebarSlice = createSlice({
    name: "sidebar",
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeSidebar: (state) => {
            state.isOpen = false
        }

    },
    initialState: initialState

})

export const { toggle, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer