import Grid from '../components/Grid'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getTvSeriesUpcoming, setDefaultPage, changePage } from '../redux/features/sectionPageSlice'
import HeaderPage from '../components/HeaderPage'
import SearchForm from '../components/SearchForm'
import Pagination from '../components/Pagination'

const Tv = () => {
  const dispatch = useDispatch();
  const { data, isLoading, currentPage, totalPages } = useSelector((state) => {
    return state.sectionPage
  })
  const navigatePathDetail = '/tv/detail'
  useEffect(() => {
    dispatch(getTvSeriesUpcoming())
    // eslint-disable-next-line
  }, [currentPage])
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    // eslint-disable-next-line
  }, [currentPage])
  useEffect(() => {
    dispatch(
      setDefaultPage()
    )
    // eslint-disable-next-line
  }, [])
  return (
    <main>
      <HeaderPage title="TV Series" />
      <SearchForm type_search="tv" />
      <Grid data={data} navigatePathDetail={navigatePathDetail} isLoading={isLoading} />
      {data.length > 0 &&
        <Pagination totalPages={totalPages} currentPage={currentPage} changePage={changePage} />
      }
    </main>
  )
}


export default Tv