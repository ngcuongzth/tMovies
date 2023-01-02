import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { tmovieApi, category, movieType, tvType } from "../../api/tmovieApi";
import axios from "axios";


const initialState = {
    isLoading: false,
    data: [],
    currentPage: 1,
    totalPages: 1
}
export const getMovieUpcoming = createAsyncThunk(
    "sectionPage/getMovieUpcoming", async (name, thunkAPI) => {
        const { currentPage } = thunkAPI.getState().sectionPage;
        const url = tmovieApi.getUpcoming(category.movie, movieType.upcoming, currentPage);
        try {
            const resp = await axios.get(url);
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue('get movie upcoming failure', error);
        }
    }
)
export const getTvSeriesUpcoming = createAsyncThunk(
    "sectionPage/getTvSeriesUpcoming", async (name, thunkAPI) => {
        const { currentPage } = thunkAPI.getState().sectionPage;
        const url = tmovieApi.getUpcoming(category.tv, tvType.on_the_air, currentPage);
        try {
            const resp = await axios.get(url);
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue('get tv series upcoming failure', error);
        }
    }
)
const sectionPageSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers: {
        increasePage: (state) => {
            state.currentPage = state.currentPage + 1;
        },
        decreasePage: (state) => {
            state.currentPage = state.currentPage - 1;
        },
        changePage: (state, action) => {
            state.currentPage = action.payload
        },
        setDefaultPage: (state) => {
            state.currentPage = 1;
        }
    },
    extraReducers: (builder) => {
        // movie
        builder.addCase(getMovieUpcoming.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getMovieUpcoming.fulfilled, (state, action) => {
            state.isLoading = false;
            state.totalPages = action.payload.total_pages;
            state.data = action.payload.results;
        })
        builder.addCase(getMovieUpcoming.rejected, (state) => {
            state.isLoading = false;
        })

        // tv
        builder.addCase(getTvSeriesUpcoming.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getTvSeriesUpcoming.fulfilled, (state, action) => {
            state.isLoading = false;
            state.totalPages = action.payload.total_pages;
            state.data = action.payload.results;
        })
        builder.addCase(getTvSeriesUpcoming.rejected, (state) => {
            state.isLoading = false;
        })
    }
})
export const { increasePage, decreasePage, changePage, setDefaultPage } = sectionPageSlice.actions;
export default sectionPageSlice.reducer;