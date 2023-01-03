import GlobalStyles from "./styled/GlobalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout/SharedLayout"
import { Home, Error, Movies, TvSeries, MovieSearch, TvSeriesSearch, MovieDetails, TvSeriesDetails, Collection } from './pages'
import { Auth0Provider } from "@auth0/auth0-react"

const App = () => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
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
            <Route path="/collection" element={<Collection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>

  )
}

export default App