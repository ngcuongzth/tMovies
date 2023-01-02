import { useParams } from "react-router-dom"
import { updateId } from "../redux/features/detailSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import DetailWrapper from "../components/Detail/DetaiWrapper";

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(updateId(id));
        // eslint-disable-next-line
    }, [id])

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <main>
            <DetailWrapper type_detail="movie" />
        </main>
    )
}



export default MovieDetails