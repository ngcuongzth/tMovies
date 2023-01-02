import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    getMovieDescription, getTvSeriesDescription,
    getMovieCredits, getTvSeriesCredits,
    getMovieVideos, getTvSeriesVideos,
    getMovieSimilar, getTvSeriesSimilar
} from "../../redux/features/detailSlice";
import Description from "./Description";
import Loading from "../Loading/MainLoading";
import Videos from "./Videos";
import ListSlider from '../../components/ListSlider'


const Detail = ({ type_detail }) => {
    const dispatch = useDispatch();
    const { id, data, isLoading, casts, videos, similar } = useSelector((state) => {
        return state.detail
    })
    useEffect(() => {
        if (id && type_detail === "movie") {
            dispatch(getMovieDescription())
            dispatch(getMovieCredits())
            dispatch(getMovieVideos())
            dispatch(getMovieSimilar())
        }
        if (id && type_detail === "tv") {
            dispatch(getTvSeriesDescription())
            dispatch(getTvSeriesCredits())
            dispatch(getTvSeriesVideos())
            dispatch(getTvSeriesSimilar())
        }
        // eslint-disable-next-line
    }, [id])
    if (isLoading) {
        return <Loading />;
    }
    return (
        <section>
            <Description data={data} casts={casts} />
            <Videos videos={videos} />
            <ListSlider data={similar} type={type_detail} title="Similar" />
        </section>
    )
}


export default Detail