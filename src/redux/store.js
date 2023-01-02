import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebarSlice";
import heroSlice from "./features/heroSlice";
import listSlice from "./features/listSlice";
import searchSlice from "./features/searchSlice";
import detailSlice from "./features/detailSlice";
import sectionPageSlice from "./features/sectionPageSlice";


const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        hero: heroSlice,
        list: listSlice,
        search: searchSlice,
        detail: detailSlice,
        sectionPage: sectionPageSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store 