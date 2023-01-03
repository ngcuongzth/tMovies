import styled from "styled-components/macro"
import CardItem from "./CardItem"
import { breakpoints } from "../styled/variables"
import CardItemLoading from '../components/Loading/CardItemLoading'

const Grid = ({ navigatePathDetail, data, isLoading }) => {
    if (isLoading) {
        return (
            <Wrapper className="container">
                <CardItemLoading />
                <CardItemLoading />
                <CardItemLoading />
                <CardItemLoading />
                <CardItemLoading />
                <CardItemLoading />
            </Wrapper>
        )
    }
    return (
        <Wrapper className="container">
            {
                data.map((movie) => {
                    return <CardItem navigatePathDetail={navigatePathDetail} key={movie.id} id={movie.id} {...movie} />
                })
            }
        </Wrapper>
    )
}

export const Wrapper = styled.section`
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    gap: 20px;
    padding: 0 2rem;
    @media screen and (max-width: 1200px){
            grid-template-columns: repeat(5,1fr);
    }
    @media screen and (max-width: ${breakpoints.large}){
             grid-template-columns: repeat(3,1fr);
    }
    @media screen and (max-width: ${breakpoints.medium}){
            grid-template-columns: repeat(2,1fr);
    }
     @media screen and (max-width: ${breakpoints.small}){
            grid-template-columns: repeat(1,1fr);
    }

`

export default Grid