import styled from "styled-components/macro"
import { colors, breakpoints } from "../../styled/variables"


const Videos = ({ videos }) => {
    return (
        <Wrapper className="container">
            {videos.map((video) => {
                const { id, name, key, title } = video
                return <Video key={id}>
                    <h2>{name || title}</h2>
                    <iframe src={`https://www.youtube.com/embed/${key}`}
                        width="100%"
                        title={name}
                    ></iframe>
                </Video>
            })}
        </Wrapper>
    )
}
const Wrapper = styled.section`
    padding: 0 2rem;
`

const Video = styled.div`
    margin-bottom: 5rem;
    h2{
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: ${colors.text_color};
    }
    iframe{
        height: 80vh;
        @media screen and (max-width: ${breakpoints.medium} ){
            height: 60vh;
        }
        @media screen and (max-width: ${breakpoints.small} ){
            height: 50vh;
        }
        @media screen and (max-width: ${breakpoints.x_small} ){
            height: 50vh;
        }
    }
`

export default Videos