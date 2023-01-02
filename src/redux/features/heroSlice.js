import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { category, movieType, tmovieApi } from '../../api/tmovieApi'


const initialState = {
    isLoading: false,
    idTrailer: null,
    hero: [],
    noTrailer: false,
    trailerSrc: ""
}

export const getHeroSlide = createAsyncThunk("hero/getHeroSlide", async (name, thunkAPI) => {
    const url = tmovieApi.getHeroMovie(category.movie, movieType.popular, 1);
    try {
        const resp = await axios.get(url);
        return resp.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue('get movie popular failure', error);
    }
})

export const getMovieTrailer = createAsyncThunk("hero/getMovieTrailer", async (name, thunkAPI) => {
    const id = thunkAPI.getState().hero.idTrailer;
    const url = tmovieApi.getMovieTrailer(category.movie, id)
    try {
        const resp = await axios.get(url);
        return resp.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue('get movie trailer failure ', error);
    }
})
const heroSlice = createSlice({
    name: 'hero',
    initialState: initialState,
    reducers: {
        updateTrailerId: (state, action) => {
            state.idTrailer = action.payload;
        },
        closeTrailerModal: (state) => {
            state.idTrailer = null;
            state.trailerSrc = "";
            state.noTrailer = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getHeroSlide.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getHeroSlide.fulfilled, (state, action) => {
            state.hero = action.payload.results.slice(0, 6);
            state.isLoading = false;
        })
        builder.addCase(getHeroSlide.rejected, (state) => {
            state.isLoading = false;
        })

        builder.addCase(getMovieTrailer.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload.results.length > 0) {
                state.trailerSrc = `https://www.youtube.com/embed/${action.payload.results[0].key}`;
            }
            else {
                state.noTrailer = true;
                state.trailerSrc = '';
            }
        })
        builder.addCase(getMovieTrailer.rejected, (state) => {
            state.isLoading = false;
        })

    }
})

export default heroSlice.reducer;
export const { updateTrailerId, closeTrailerModal } = heroSlice.actions;