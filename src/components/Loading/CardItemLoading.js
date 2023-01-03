import styled from "styled-components/macro";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardItemLoading = () => {
    return (
        <Wrapper>
            <Skeleton className="thumb" />
            <div className="title">
                <Skeleton className="para para-1" />
                <Skeleton className="para para-2" />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .thumb{
        width: 100%;
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-top: 160%;
        border-radius: 20px;
    }
    .title{
        margin-top: 1.5rem;
        .para{
            height: 25px;
            margin-bottom: 5px;
        }
        .para-1{
            width: 80%;
        }
        .para-2{
            width: 50%;
        }
    }

`


export default CardItemLoading