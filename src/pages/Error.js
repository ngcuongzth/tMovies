import errorGif from '../assets/img/404.svg'
import { colors } from '../styled/variables'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Error = () => {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <Wrapper className="container">
            <Thumbnail>
                <img src={errorGif} alt="error" />
            </Thumbnail>
            <Description>
                <h1>Oops! We can't find the page you're looking for</h1>
                <p>
                    You tried to request a page that doesn't exist. If you believe this to be in error, let us know
                </p>
                <ButtonWrapper className="btn-wrapper">
                    <button className="outline-btn small">
                        <Link to="/" onClick={() => {
                            window.scroll({
                                top: 100,
                                left: 100,
                                behavior: 'smooth'
                            });
                        }}>
                            Back to home
                        </Link>
                    </button>
                </ButtonWrapper>
            </Description>
        </Wrapper>
    )
}
const Thumbnail = styled.div`
    img{
        margin: 0 auto;
    }
`
const ButtonWrapper = styled.div`
        display: flex;
       justify-content: center;
       align-items: center;
        margin-top: 3rem;
`
const Description = styled.div`
    margin-top: 2rem;
    margin-bottom: 3rem;
        h1{
            font-size: 3rem;
            text-align: center;
            color: ${colors.text_color};
            font-weight: 600;
        }
        p{
            font-size: 1.2rem;
            text-align: center;
             color: ${colors.text_color};   
        }
`
const Wrapper = styled.main`
    margin-top: 8rem;
    padding: 0 2rem;
    padding-top: 8rem;
    padding-bottom: 3rem;
    position: relative;
    &:after{
        background-image: linear-gradient(0deg,#0f0f0f,rgba(0,0,0,0));
        bottom: 0;
        content: "";
        height: 100px;
        left: 0;
        position: absolute;
        width: 100%;
    }
`
export default Error