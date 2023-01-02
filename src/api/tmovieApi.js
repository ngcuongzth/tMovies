import apiConfig from "./apiConfig";

export const category = {
    movie: "movie",
    tv: "tv"
}

export const movieType = {
    upcoming: "upcoming",
    popular: "popular",
    top_rated: "top_rated"
}

export const tvType = {
    popular: "popular",
    top_rated: "top_rated",
    on_the_air: "on_the_air"
}

const { baseUrl, apiKey } = apiConfig;

export const tmovieApi = {
    getHeroMovie: (category, type, page) => {
        return `${baseUrl}${category}/${type}?api_key=${apiKey}&page=${page}`
    },
    getMovieTrailer: (category, idMovie) => {
        return `${baseUrl}${category}/${idMovie}/videos?api_key=${apiKey}`
    },
    getList: (category, type) => {
        return `${baseUrl}${category}/${type}?api_key=${apiKey}`
    },
    getUpcoming: (category, type, page) => {
        return `${baseUrl}${category}/${type}?api_key=${apiKey}&page=${page}`;
    },
    getSearchResult: (category, query, page) => {
        return `${baseUrl}search/${category}?api_key=${apiKey}&page=${page}&query=${query}`
    },
    getDetail: (category, id) => {
        return `${baseUrl}${category}/${id}?api_key=${apiKey}`;
    },
    getCredit: (category, id) => {
        return `${baseUrl}${category}/${id}/credits?api_key=${apiKey}`;
    },
    getVideos: (category, id) => {
        return `${baseUrl}${category}/${id}/videos?api_key=${apiKey}`
    },
    getSimilar: (category, id) => {
        return `${baseUrl}${category}/${id}/similar?api_key=${apiKey}`
    }
}