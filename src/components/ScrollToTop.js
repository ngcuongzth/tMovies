import { ScrollToTopIcon } from '../utils/constant'
import MyScroll from 'react-scroll-to-top'


const ScrollToTop = () => {
    return (
        <MyScroll
            smooth top={1000}
            className="scroll-to-top"
            component={<ScrollToTopIcon />}
        >
        </MyScroll>
    )
}
export default ScrollToTop