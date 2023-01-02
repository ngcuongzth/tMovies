import GlobalStyles from "./styled/GlobalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import { Home, Error, Movies, TvSeries, MovieSearch, TvSeriesSearch, MovieDetails, TvSeriesDetails } from './pages'


const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/tv" element={<TvSeries />} />
            <Route path="*" element={<Error />} />
            <Route path="/movie/search/:query" element={<MovieSearch />} />
            <Route path="/tv/search/:query" element={<TvSeriesSearch />} />
            <Route path="/movie/detail/:id" element={<MovieDetails />} />
            <Route path="/tv/detail/:id" element={<TvSeriesDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App