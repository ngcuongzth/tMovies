import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { category, tmovieApi } from '../../api/tmovieApi'



const initialState = {
    banner: "",
    isLoading: true,
    id: null,
    data: null,
    casts: [],
    videos: [],
    similar: []
}
export const getMovieDescription = createAsyncThunk("detail/getMovieDescription", async (name, thunkAPI) => {
    const { id } = thunkAPI.getState().detail;
    const url = tmovieApi.getDetail(category.movie, id)
    try {
        const resp = await axios.get(url);
        return resp.data
    }
    catch (error) {
        thunkAPI.rejectWithValue("get movie detail failure", error)
    }
})
export const getTvSeriesDescription = createAsyncThunk("detail/getTvSeriesDescription", async (name, thunkAPI) => {
    const { id } = thunkAPI.getState().detail;
    const url = tmovieApi.getDetail(category.tv, id)
    try {
        const resp = await axios.get(url);
        return resp.data
    }
    catch (error) {
        thunkAPI.rejectWithValue("get tv series detail failure", error)
    }
})

export const getMovieCredits = createAsyncThunk("detail/getMovieCredits", async (name, thunkAPI) => {
    const { id } = thunkAPI.getState().detail;
    const url = tmovieApi.getCredit(category.movie, id)
    try {
        const resp = await axios.get(url);
        return resp.data
    }
    catch (error) {
        thunkAPI.rejectWithValue("get movie credits failure", error)
    }
})

export const getTvSeriesCredits = createAsyncThunk("detail/getTvSeriesCredits", async (name, thunkAPI) => {
    const { id } = thunkAPI.getState().detail;
    const url = tmovieApi.getCredit(category.tv, id)
    try {
        const resp = await axios.get(url);
        return resp.data
    }
    catch (error) {
        thunkAPI.rejectWithValue("get tv series credits failure", error)
    }
})

export const getMovieVideos = createAsyncThunk("detail/getMovieVideos", async (name, thunkAPI) => {
    const { id } = thunkAPI.getState().detail;
    const url = tmovieApi.getVideos(category.movie, id);
    try {
        const resp = await axios.get(url);
        return resp.data;
    }
    catch (error) {
        thunkAPI.rejectWithValue("get movie videos failure", error);
    }
})
export const getTvSeriesVideos = createAsyncThunk("detail/getTvSeriesVideos", async (name, thunkAPI) => {
    const { id } = thunkAPI.getState().detail;
    const url = tmovieApi.getVideos(category.tv, id);
    try {
        const resp = await axios.get(url);
        return resp.data;
    }
    catch (error) {
        thunkAPI.rejectWithValue("get tv series videos failure", error);
    }
})

export const getMovieSimilar = createAsyncThunk("detail/getMovieSimilar", async (name, thunkAPI) => {
    const { id } = thunkAPI.getState().detail;
    const url = tmovieApi.getSimilar(category.movie, id);
    try {
        const resp = await axios.get(url);
        return resp.data;
    }
    catch (error) {
        thunkAPI.rejectWithValue("get movies similar", error);
    }
})
export const getTvSeriesSimilar = createAsyncThunk("detail/getTvSeriesSimilar", async (name, thunkAPI) => {
    const { id } = thunkAPI.getState().detail;
    const url = tmovieApi.getSimilar(category.tv, id);
    try {
        const resp = await axios.get(url);
        return resp.data;
    }
    catch (error) {
        thunkAPI.rejectWithValue("get tv series similar", error);
    }
})

const detailSlice = createSlice({
    name: 'detail',
    initialState: initialState,
    reducers: {
        updateId: (state, action) => {
            state.id = action.payload
        }
    },
    extraReducers: (builder) => {
        // movie details
        builder.addCase(getMovieDescription.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getMovieDescription.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getMovieDescription.rejected, (state) => {
            state.isLoading = false;
        })
        // tv series details
        builder.addCase(getTvSeriesDescription.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getTvSeriesDescription.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getTvSeriesDescription.rejected, (state) => {
            state.isLoading = false;
        })

        // credits
        builder.addCase(getMovieCredits.fulfilled, (state, action) => {
            state.casts = action.payload.cast.slice(0, 6);
        })
        builder.addCase(getTvSeriesCredits.fulfilled, (state, action) => {
            state.casts = action.payload.cast.slice(0, 6);
        })

        // videos
        builder.addCase(getMovieVideos.fulfilled, (state, action) => {
            state.videos = action.payload.results.slice(0, 4);
        })
        builder.addCase(getTvSeriesVideos.fulfilled, (state, action) => {
            state.videos = action.payload.results.slice(0, 4);
        })

        // similar
        builder.addCase(getMovieSimilar.fulfilled, (state, action) => {
            state.similar = action.payload.results;
        })
        builder.addCase(getTvSeriesSimilar.fulfilled, (state, action) => {
            state.similar = action.payload.results;
        })
    }
})
export const { updateId } = detailSlice.actions;
export default detailSlice.reducer;