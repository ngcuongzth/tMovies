import styled from "styled-components/macro";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { breakpoints } from "../../styled/variables";
const HomeHeroLoading = () => {
    return (
        <Wrapper>
            <SlideContent className="container">
                <SlideInfo>
                    <div className="title">
                        <Skeleton className="title-1" />
                        <Skeleton className="title-2" />
                    </div>
                    <div className="overview">
                        <Skeleton className="para" />
                        <Skeleton className="para" />
                        <Skeleton className="para" />
                    </div>
                    <div className="btn-wrapper">
                        <Skeleton className="btn" />
                        <Skeleton className="btn" />
                    </div>
                </SlideInfo>

                <SlidePoster>
                    <Skeleton className="poster" />
                </SlidePoster>
            </SlideContent>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    padding: 9rem 0;
`
const SlideContent = styled.div`
    display: grid;
    grid-template-columns : 1fr 1fr;
    place-items: center;
    padding: 0 3rem;
     @media screen and (max-width: ${breakpoints.medium}){
        grid-template-columns: 1fr;
    }
`
const SlideInfo = styled.div`
    width: 100%;
    .title{
      .title-1, .title-2{
        height: 3.5rem;
      }
      .title-1{
        width: 70%;
      }
      .title-2{
        width: 30%;
         @media screen and (max-width: ${breakpoints.medium}){
        display: none;
    }
      }
    }
    .overview{
        margin-top: 2rem;
        .para{
            height: 2rem;
        }
    }
    .btn-wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin-top: 3rem;
        @media screen and (max-width: ${breakpoints.large}){
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            .btn{
                width: 150px;
            }
        }
    }
`
const SlidePoster = styled.div`
    .poster{
        width: 300px;
        height: 450px;
        border-radius: 30px;
    }
    @media screen and (max-width: ${breakpoints.medium}){
        display: none;
    }
`
export default HomeHeroLoading