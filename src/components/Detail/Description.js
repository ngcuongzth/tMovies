import styled from "styled-components/macro"
import apiConfig from "../../api/apiConfig";
import { colors, border_radius, breakpoints } from "../../styled/variables";
import Casts from "./Casts";


const Description = ({ data, casts }) => {
    const { backdrop_path, poster_path, name, title, genres, overview,
        runtime, vote_average, vote_count } = data;
    const banner = apiConfig.originalImage(backdrop_path || poster_path);

    return (
        <Wrapper>
            <Banner style={{
                backgroundImage: `url(${banner})`
            }} />
            <Content>
                <Thumb>
                    <div className="thumb"
                        style={{ backgroundImage: `url(${banner})` }}>
                    </div>
                </Thumb>
                <Info>
                    <h1 className="title">
                        {name || title}
                    </h1>
                    <div className="genres">
                        {genres.slice(0, 5).map((item) => {
                            return <span key={item.id}>
                                {item.name}
                            </span>
                        })}
                    </div>
                    <div className="desc-1">
                        {runtime &&
                            <p className="runtime">
                                Runtime: {runtime} minutes
                            </p>
                        }
                        {vote_average && <p className="rate">Rate: {vote_average.toFixed(2)} / 10 ({vote_count} votes)</p>}

                    </div>
                    <p className="overview">
                        {overview}
                    </p>
                    <Casts casts={casts} />
                </Info>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`
const Banner = styled.div`
    height: 50vh;
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.6);
    }
    &:after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(to top, ${colors.body_color},transparent )
    }
`

const Content = styled.div`
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 3fr 7fr;
    gap: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: -200px;
    padding: 0 2rem;
    max-width: 1600px;
    position: relative;
    @media screen and (max-width: ${breakpoints.medium}){
        grid-template-columns: unset;
    }
`
const Thumb = styled.div`
    .thumb{
        width: 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: ${border_radius.main_border_radius};
        padding-top: 165%;
    }
    @media screen and (max-width: ${breakpoints.extra_large}){
        .thumb{
            padding-top: 145%;
        }
    }
    @media screen and (max-width: ${breakpoints.medium}){
        .thumb{
            display: none;
        }
    }
`

const Info = styled.div`
    position: relative;
    .title{
            font-size: 4rem;
            line-height: 1;
            color: ${colors.main_color};
    }
    .genres, .title {
        margin-bottom: 2rem;
        }
    .genres{
        display: flex;
        gap: 0.5rem;
        span{
            background-color: ${colors.black};
            border: 2px solid ${colors.white};
            border-radius: ${border_radius.main_border_radius};
            font-size: .8rem;
            font-weight: 600;
            padding: 0.5rem 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }
    .desc-1{
        display: flex;
        align-items: center;
        gap: 2rem;
        .runtime, .rate{
            font-weight: 600;
            font-size: 1.2rem;
            color: ${colors.main_color};
        }

        @media screen and (max-width: ${breakpoints.small}){
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
        }
    }
    .overview{
        margin-bottom: 0.8rem;
    }
`




export default Description