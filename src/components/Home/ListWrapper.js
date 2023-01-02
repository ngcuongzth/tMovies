import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingMovies, getTopRatedMovies, getTrendingTv, getTopRatedTv } from '../../redux/features/listSlice'
import ListSlider from '../ListSlider'


const ListWrapper = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrendingMovies());
        dispatch(getTopRatedMovies());
        dispatch(getTrendingTv());
        dispatch(getTopRatedTv());
        // eslint-disable-next-line
    }, [])

    const { trendingMovies, topRatedMovies, trendingTv, topRatedTv } = useSelector((state) => {
        return state.list
    });

    return (
        <section className="container">
            <ListSlider data={trendingMovies} type="movie" title="Trending Movies" />
            <ListSlider data={topRatedMovies} type="movie" title="Top Rated Movies" />
            <ListSlider data={trendingTv} type="tv" title="Trending TV Series" />
            <ListSlider data={topRatedTv} type="tv" title="Top Rated TV Series" />
        </section>
    )
}



export default ListWrapper