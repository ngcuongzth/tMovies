import Grid from '../components/Grid'
import { useSelector } from 'react-redux'
import HeaderPage from '../components/HeaderPage'
import SearchForm from '../components/SearchForm'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMovieUpcoming, setDefaultPage, changePage } from '../redux/features/sectionPageSlice'
import Pagination from '../components/Pagination'

const Movies = () => {
  const { data, isLoading, currentPage, totalPages } = useSelector((state) => {
    return state.sectionPage
  })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieUpcoming())
    // eslint-disable-next-line
  }, [currentPage])

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentPage])

  useEffect(() => {
    dispatch(
      setDefaultPage()
    )
    // eslint-disable-next-line
  }, [])

  const navigatePathDetail = '/movie/detail'
  return (
    <main >
      <HeaderPage title="Movies" />
      <SearchForm type_search="movie" />
      <Grid data={data} navigatePathDetail={navigatePathDetail} isLoading={isLoading} />
      {data.length > 0 &&
        <Pagination totalPages={totalPages} currentPage={currentPage} changePage={changePage} />
      }
    </main>
  )
}

export default Movies