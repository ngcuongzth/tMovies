import { ScrollToTopIcon } from '../../utils/icons'
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