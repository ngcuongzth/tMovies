import styled from "styled-components/macro"
import HeaderPage from "../components/HeaderPage"
import SearchForm from "../components/SearchForm"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { updateQuery, changePage, searchMovie, setDefaultPage } from "../redux/features/searchSlice"
import { useDispatch, useSelector } from "react-redux"
import Grid from "../components/Grid"
import PaginationRounded from "../components/Pagination"

const MovieSearch = () => {
    const { searchResults, isLoading, query: currentQuery, totalPages, currentPage, totalResults } = useSelector((state) => {
        return state.search;
    })
    const dispatch = useDispatch();
    const { query } = useParams();

    useEffect(() => {
        dispatch(updateQuery(query.trim()));
        dispatch(searchMovie());
        // eslint-disable-next-line
    }, [currentPage]);

    useEffect(() => {
        dispatch(setDefaultPage())
        // eslint-disable-next-line
    }, [currentQuery])

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <Wrapper>
            <HeaderPage title="Search Movie" />
            <SearchForm type_search="movie" />
            <NotifySearch>
                There are {totalResults} search results for "{currentQuery}"
            </NotifySearch>
            <Grid data={searchResults} navigatePathDetail="/movie/detail" isLoading={isLoading} />
            {searchResults.length <= 0 && currentQuery &&
                <NoResults>
                    No results found for "{currentQuery}"
                </NoResults>
            }
            {searchResults.length > 0 &&
                <PaginationRounded totalPages={totalPages} currentPage={currentPage} changePage={changePage} />
            }
        </Wrapper>
    )
}

const Wrapper = styled.main`
    min-height: 100vh;
`

const NotifySearch = styled.h5`
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-bottom: 3rem;
    font-style: italic;
    letter-spacing: 2px;
`

const NoResults = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25vh 0;
    padding: 0 2rem;
    font-size: 1.5rem;
    font-style: italic;
    letter-spacing: 2px;
    font-weight: 300;
`

export default MovieSearch