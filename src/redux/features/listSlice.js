import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { category, movieType, tvType, tmovieApi } from "../../api/tmovieApi";


const initialState = {
    trendingMovies: [],
    topRatedMovies: [],
    trendingTv: [],
    topRatedTv: [],
    isLoading: false
}

export const getTrendingMovies = createAsyncThunk("list/getTrendingMovies", async (name, thunkAPI) => {
    const url = tmovieApi.getList(category.movie, movieType.popular);
    try {
        const resp = await axios.get(url);
        return resp.data
    }
    catch (error) {
        return thunkAPI.rejectWithValue("get trending movie failure", error)
    }
})
export const getTopRatedMovies = createAsyncThunk("list/getTopRatedMovies", async (name, thunkAPI) => {
    const url = tmovieApi.getList(category.movie, movieType.top_rated);
    try {
        const resp = await axios.get(url);
        return resp.data
    }
    catch (error) {
        return thunkAPI.rejectWithValue("get top rated movie failure", error)
    }
})
export const getTrendingTv = createAsyncThunk("list/getTrendingTv", async (name, thunkAPI) => {
    const url = tmovieApi.getList(category.tv, tvType.popular);
    try {
        const resp = await axios.get(url);
        return resp.data
    }
    catch (error) {
        return thunkAPI.rejectWithValue("get trending tv failure", error)
    }
})

export const getTopRatedTv = createAsyncThunk("list/getTopRatedTv", async (name, thunkAPI) => {
    const url = tmovieApi.getList(category.tv, tvType.top_rated);
    try {
        const resp = await axios.get(url);
        return resp.data
    }
    catch (error) {
        return thunkAPI.rejectWithValue("get top rated tv failure", error)
    }
})

const listSlice = createSlice({
    name: 'list',
    initialState: initialState,
    extraReducers: (builder) => {
        // trending movies
        builder.addCase(getTrendingMovies.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getTrendingMovies.fulfilled, (state, action) => {
            state.trendingMovies = action.payload.results;
        })
        // top rated movie
        builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
            state.topRatedMovies = action.payload.results;
        })
        // trending tv 
        builder.addCase(getTrendingTv.fulfilled, (state, action) => {
            state.trendingTv = action.payload.results
        })
        // top rated tv
        builder.addCase(getTopRatedTv.fulfilled, (state, action) => {
            state.isLoading = false;
            state.topRatedTv = action.payload.results
        })
    }
})

export default listSlice.reducer;