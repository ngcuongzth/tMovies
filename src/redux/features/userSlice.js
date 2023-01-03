import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    user: null,
    isLogin: false,
    collection: localStorage.getItem("collection") ? JSON.parse(localStorage.getItem("collection")) : []
}
const userSlice = createSlice({
    name: "collection",
    initialState: initialState,
    reducers: {
        handleLogin: (state, action) => {
            state.user = action.payload;
            state.isLogin = true;
        },
        handleLogout: (state) => {
            state.user = null
            state.isLogin = false
        },
        addCollectionItem: (state, action) => {
            const newItem = action.payload;
            const isIncluded = state.collection.find((item) => {
                return item.id === newItem.id;
            })
            if (isIncluded) {
                return;
            }
            else {
                state.collection = [...state.collection, action.payload]
            }
            toast.success('Added to the collection!')
        },
        removeCollectionItem: (state, action) => {
            const newCollection = state.collection.filter((item) => {
                if (item.id === action.payload.id && item.navigatePathDetail === action.payload.navigatePathDetail) {
                    return false;
                }
                return true;
            })
            state.collection = newCollection;
            toast.success("Removed from collection!")
        }
    }
})
export const { handleLogin, handleLogout, addCollectionItem, removeCollectionItem } = userSlice.actions
export default userSlice.reducer