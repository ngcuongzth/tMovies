import styled from "styled-components/macro"
import HeaderPage from "../components/HeaderPage"
import SearchForm from "../components/SearchForm"
import { useDispatch, useSelector } from "react-redux"
import { searchTvSeries, updateQuery, changePage, setDefaultPage } from "../redux/features/searchSlice"
import { useEffect } from "react"
import Grid from "../components/Grid"
import { useParams } from "react-router-dom"
import PaginationRounded from "../components/Pagination"
const TvSearch = () => {
    const dispatch = useDispatch();
    const { query } = useParams();
    const { searchResults, isLoading, query: currentQuery, currentPage, totalPages, totalResults } = useSelector((state) => {
        return state.search;
    })

    useEffect(() => {
        dispatch(updateQuery(query.trim()));
        dispatch(searchTvSeries());
        // eslint-disable-next-line
    }, [currentPage]);

    useEffect(() => {
        dispatch(setDefaultPage())
        // eslint-disable-next-line
    }, [currentQuery]);

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <Wrapper>
            <HeaderPage title="TV Series Search" />
            <SearchForm type_search="tv" />
            <NotifySearch>
                There are {totalResults} search results for "{currentQuery}"
            </NotifySearch>
            <Grid data={searchResults} navigatePathDetail="/tv/detail" isLoading={isLoading} />
            {searchResults.length <= 0 && currentQuery &&
                <NoResults>
                    No results found for "{currentQuery}"
                </NoResults>
            }
            {searchResults.length > 0 &&
                <PaginationRounded currentPage={currentPage} totalPages={totalPages} changePage={changePage} />
            }
        </Wrapper>
    )
}


const Wrapper = styled.main`

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

export default TvSearch