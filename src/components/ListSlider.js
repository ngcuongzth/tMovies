import React from 'react'
import CardItem from './CardItem'
import styled from 'styled-components/macro'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { breakpoints, border_radius } from '../styled/variables';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import CardItemLoading from './Loading/CardItemLoading';

const List = ({ type, data, title }) => {
    const { isLoading } = useSelector((state) => {
        return state.list
    })
    useEffect(() => {
        if (!isLoading) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }, [isLoading])
    let navigatePathPage;
    let navigatePathDetail;

    if (type === "movie") {
        navigatePathPage = "/movie"
        navigatePathDetail = "/movie/detail"
    }
    if (type === "tv") {
        navigatePathPage = "/tv"
        navigatePathDetail = "/tv/detail"
    }
    return (
        <Wrapper className='container'>
            <Header>
                {data.length >= 0 &&
                    <h2>{title}</h2>
                }
                {title !== "Similar" &&
                    <button className="small outline-btn">
                        <Link to={navigatePathPage}>
                            View more
                        </Link>
                    </button>
                }
            </Header>
            <Slide>
                <Swiper
                    className="my-swiper"
                    grabCursor={true}
                    spaceBetween={15}
                    slidesPerView={"auto"}
                    navigation={true}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                    }}
                    speed={1500}
                    slidesPerGroupAuto={true}
                    modules={[Navigation, Pagination, Scrollbar, Keyboard, Mousewheel]}
                >
                    {isLoading ? <>
                        <SwiperSlide>
                            <CardItemLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardItemLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardItemLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardItemLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardItemLoading />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardItemLoading />
                        </SwiperSlide>
                    </> : <></>}
                    {data !== undefined &&
                        data.map((item) => {
                            const { id } = item;
                            return <SwiperSlide key={id}>
                                <CardItem {...item} type={type} navigatePathDetail={navigatePathDetail} />
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </Slide>
        </Wrapper>
    )
}



const Wrapper = styled.section`
    padding: 0 2rem;
    &.container{
        margin-bottom: 3rem;
    }
`
const Header = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-size: 2rem;
    }
    a{
        font-size: 1rem;
    }
    button.small{
        border-radius: ${border_radius.secondary_border_radius};
    }
`
const Slide = styled.div`
    .swiper-slide{
        width: 15%;
    }
    img{
        border-radius: ${border_radius.main_border_radius};
    }
    .my-swiper{
        .swiper-button-prev, .swiper-button-next {
            background-color: rgb(255 255 255 / 0.3);
            border: none;
            border-radius: 50%;
            box-shadow: 0 0 7px 12px rgb(0 0 0 / 40%);
            height: 40px;
            position: absolute;
            top: 50%;
            -webkit-transform: translateY(-120%);
            transform: translateY(-120%);
            transition: box-shadow .3s ease;
            width: 40px;
            z-index: 10;
            &:after{
                display: none;
            }
        }
    }

    @media screen and (max-width: ${breakpoints.extra_extra_large}){
        .my-swiper{
            .swiper-slide{
                width: 20%;
            }
        }
    }
    @media screen and (max-width: ${breakpoints.extra_large}){
        .my-swiper{
            .swiper-slide{
                width: 25%;
            }
        }
    }
    @media screen and (max-width: ${breakpoints.large}){
        .my-swiper{
            .swiper-slide{
                width: 30%;
            }
        }
    }
    @media screen and (max-width: ${breakpoints.medium}){
       .my-swiper{
            .swiper-slide{
                width: 35%;
            }
        }
    }
    @media screen and (max-width: ${breakpoints.small}){
         .my-swiper{
            .swiper-slide{
                width: 60%;
            }
        }
    }
    @media screen and (max-width:${breakpoints.x_small}){
         .my-swiper{
            .swiper-slide{
                width: 95%;
            }
        }
    }

`
export default List
