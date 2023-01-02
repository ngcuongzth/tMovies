import HeroSlide from '../components/Home/HeroSlide'
import ListWrapper from '../components/Home/ListWrapper'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <main>
            <HeroSlide />
            <ListWrapper />
        </main>
    )
}

export default Home