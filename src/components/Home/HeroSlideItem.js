import { Link } from "react-router-dom"
import styled from "styled-components/macro"
import apiConfig from "../../api/apiConfig"
import { useDispatch } from "react-redux"
import {
    transitions, breakpoints,
    shadows, border_radius, colors
} from '../../styled/variables'
import { getMovieTrailer, updateTrailerId } from "../../redux/features/heroSlice"


const HeroSlideItem = (props) => {
    const dispatch = useDispatch();
    const { id, backdrop_path, poster_path, title, overview } = props;
    const background = apiConfig.originalImage(backdrop_path) ? apiConfig.originalImage(backdrop_path) : apiConfig.originalImage(poster_path);
    return (
        <Wrapper
            className={`hero-slide__item ${props.className}`}
            style={{
                backgroundImage: `url(${background})`
            }}>

            <div className="slide-content container">
                <div className="slide-content__info">
                    <h2 className="title">
                        {title}
                    </h2>
                    <p className="overview">
                        {overview}
                    </p>
                    <div className="btn-wrapper">
                        <button className="btn" onClick={() => {
                        }}>
                            <Link to={`movie/detail/${id}`}
                            >
                                Watch now
                            </Link>
                        </button>
                        <button className='outline-btn'
                            onClick={() => {
                                dispatch(updateTrailerId(id));
                                dispatch(getMovieTrailer())
                            }}
                        >
                            Watch trailer
                        </button>
                    </div>
                </div>
                <div className="slide-content__poster">
                    <img src={apiConfig.w500Image(poster_path)} alt={title} />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 9rem 0;
    position: relative;
    width: 100%;
    a:hover{
        color: ${colors.text_color};
    }
    &:before{
        content: "";
        background-color: rgba(0,0,0,.6);
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
        position: absolute;
    }
    &:after{
        background-image: linear-gradient(0deg,#0f0f0f,rgba(0,0,0,0));
        bottom: 0;
        content: "";
        height: 100px;
        left: 0;
        position: absolute;
        width: 100%;
    }
     &.active .slide-content .slide-content__poster{
        img{
            transform: scale(1);
        }
    }
    &.active .slide-content .slide-content__info{
       .btn-wrapper, .title, .overview{
                opacity: 1;
                transform: translateY(0);
       };
       .title{
        transition-delay: 0.3s, 0.3s;
       }
       .overview{
        transition-delay: 0.6s, 0.6s;
       }
       .btn-wrapper{
        transition-delay: 0.9s, 0.9s;
       }
    }
    .btn-wrapper{
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .slide-content{
       display:flex;
       align-items:center;
       justify-content:center;
        position: relative;
        .slide-content__info{
            padding: 0 3rem;
            position: relative;
            width: 55%;
            .title{
                    font-size: 5rem;
                    font-weight: 700;
                    line-height: 1;
                    transition: ${transitions.main_transition};
                }
            .overview{
                font-size: 1.5rem;
                margin-top: 3rem;
                font-weight: 600;
            }
            .btn-wrapper{
                margin-top: 3rem;
            }
            .btn-wrapper, .title, .overview{
                opacity: 0;
                transform: translateY(-100px);
                transition: ${transitions.main_transition};

            }
        }
        .slide-content__poster{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: relative;
            img{
                width: 400px;
                border-radius: ${border_radius.main_border_radius};
                box-shadow: ${shadows.main_shadows};
                transform: scale(0);
                transition: ${transitions.main_transition};

            }
        }
    }
    @media screen and (max-width: ${breakpoints.extra_extra_large}){
         .slide-content{
            .slide-content__info{
                .title{
                    font-size: 4rem;
                }
                .overview{
                    font-size: 1rem;
                }
            }
             .slide-content__poster{
                img{
                    width: 300px;
                }
        }
        }
    @media screen and (max-width: ${breakpoints.large}){
        .slide-content{
            .slide-content__info{
                .title{
                    font-size: 3rem;
                }
                .btn-wrapper{
                    flex-direction: column;
                }
            }
            
        }
    }
    @media screen and (max-width: ${breakpoints.medium}){
        .slide-content{
            .slide-content__info{
                width: 100%;
                .overview{
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 5;
                    display: -webkit-box;
                    overflow: hidden;
                }
            }
            .slide-content__poster{
                display: none;
            }   
        }
    }
    @media screen and (max-width: ${breakpoints.small}){
        .btn-wrapper{
            flex-direction: column;
            & .btn, & .outline-btn{
                padding: 0.3rem 1rem;
            }
        }
    }}
`


export default HeroSlideItem