import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tmovieApi, category } from "../../api/tmovieApi";


const initialState = {
    query: "",
    searchResults: [],
    isLoading: false,
    currentPage: 1,
    totalPages: 1,
    totalResults: 0
}

export const searchMovie = createAsyncThunk("search/movie", async (name, thunkAPI) => {
    const { query, currentPage } = thunkAPI.getState().search;
    const url = tmovieApi.getSearchResult(category.movie, query, currentPage);
    try {
        const resp = await axios.get(url);
        const { data } = resp;
        return data
    }
    catch (error) {
        return thunkAPI.rejectWithValue("get movie failure", error)
    }
}
)

export const searchTvSeries = createAsyncThunk("search/tv", async (name, thunkAPI) => {
    const { query, currentPage } = thunkAPI.getState().search;
    const url = tmovieApi.getSearchResult(category.tv, query, currentPage);
    try {
        const resp = await axios.get(url);
        const { data } = resp;
        return data
    }
    catch (error) {
        return thunkAPI.rejectWithValue("get tv series failure", error)
    }
}
)
const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        updateQuery: (state, action) => {
            state.query = action.payload
        },
        changePage: (state, action) => {
            state.currentPage = action.payload
        },
        setDefaultPage: (state) => {
            state.currentPage = 1;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(searchMovie.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(searchMovie.fulfilled, (state, action) => {
            state.isLoading = false;
            state.searchResults = action.payload.results;
            state.totalPages = action.payload.total_pages
            state.totalResults = action.payload.total_results;
            console.log(action.payload)
        })
        builder.addCase(searchMovie.rejected, (state) => {
            state.isLoading = false;
        })

        builder.addCase(searchTvSeries.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(searchTvSeries.fulfilled, (state, action) => {
            state.isLoading = false;
            state.searchResults = action.payload.results;
            state.totalPages = action.payload.total_pages
            state.totalResults = action.payload.total_results;
        })
        builder.addCase(searchTvSeries.rejected, (state) => {
            state.isLoading = false;
        })

    }
})
export const { updateQuery, changePage, setDefaultPage } = searchSlice.actions;
export default searchSlice.reducer

