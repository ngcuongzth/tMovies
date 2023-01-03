import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect } from "react";
import { getHeroSlide } from "../../redux/features/heroSlice";
import { useDispatch, useSelector } from "react-redux";
import HeroSlideItem from "./HeroSlideItem";
import HeroTrailer from './HeroTrailer'
import styled from "styled-components/macro";
import Loading from '../Loading/HomeHeroLoading'

const HeroSlide = () => {
    const dispatch = useDispatch();
    const { hero, isLoading } = useSelector((state) => {
        return state.hero;
    })

    useEffect(() => {
        dispatch(getHeroSlide())
        // eslint-disable-next-line
    }, [])
    if (isLoading) {
        return <Wrapper>
            <Loading />
        </Wrapper>
    }
    return (
        <Wrapper>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                grabCursor={true}
                slidesPerView={1}
                autoplay={{
                    delay: 4000000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper">
                {
                    hero.map((item) => {
                        const { id } = item;
                        return <SwiperSlide key={id}>
                            {({ isActive }) => (
                                <HeroSlideItem
                                    {...item} className={`${isActive ? 'active' : ""}`}
                                />
                            )}
                        </SwiperSlide>
                    })
                }
            </Swiper>
            {
                hero.map((item) => {
                    const { id } = item;
                    return <HeroTrailer key={id} {...item} />
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
    min-height: 100vh;
`

export default HeroSlide