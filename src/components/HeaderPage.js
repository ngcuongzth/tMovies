
import styled from 'styled-components/macro'
import bg from '../assets/img/footer-bg.jpg'


const HeaderPage = ({ title }) => {
    return (
        <Wrapper style={{
            backgroundImage: `url(${bg})`
        }}
        >
            <Title>
                <h2>
                    {title}
                </h2>
            </Title>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 2rem;
    padding: 8rem 0 2rem;
    text-align: center;
    position: relative;
    &::after{
        content: "";
        background-image: linear-gradient(0deg, #0f0f0f, transparent);
        bottom: 0;
        left: 0;
        height: 100px;
        position: absolute;
        width: 100%;
    }
`

const Title = styled.div`
    position:relative;
    z-index: 10;
    h2{
        font-size: 1.5rem;
        font-weight: 700;
    }
`

export default HeaderPage