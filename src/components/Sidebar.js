import styled from "styled-components/macro"
import { colors, transitions } from "../styled/variables"
import { useSelector } from "react-redux"


const Sidebar = () => {
    const { isOpen } = useSelector((state) => {
        return state.sidebar
    })
    return (
        <Wrapper className={`${isOpen && 'active'}`}>
            <div className="wrap">
                <button className="sign-in">
                    Sign in
                </button>
                <button className="sign-up">
                    Sign up
                </button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 5px;
    bottom: 0px;
    padding: 2rem;
    z-index: 98;
    transform: translateX(-100%);
    transition: ${transitions.main_transition};
    &.active{
        transform: translateX(0);
    }
    .wrap{
        margin-top: 8rem;
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        font-weight: 500;
        height: 100%;
        width: 100%;
    }
    button{
        background-color: ${colors.white};
        border-radius: 5px;
        color: ${colors.black};
        margin-top: 0.5rem;
        padding: 1rem;
        width: 100%;
        text-align: left;
    }
    .sign-up{
        background-color: ${colors.main_color};
        color: ${colors.white};
    }
`

export default Sidebar