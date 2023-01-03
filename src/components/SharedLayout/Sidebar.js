import styled from "styled-components/macro"
import { colors, transitions } from "../../styled/variables"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { navLinks } from "../../utils/constants"
import { closeSidebar } from "../../redux/features/sidebarSlice"
import { useAuth0 } from "@auth0/auth0-react"
import { CollectionIcon } from "../../utils/icons"

const Sidebar = () => {
    const { isOpen } = useSelector((state) => {
        return state.sidebar
    })
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
    const { dispatch } = useDispatch()
    return (
        <Wrapper className={`${isOpen && 'active'}`}>
            <div className="wrap">
                <>
                    {navLinks.map((item) => {
                        const { id, title, link, icon } = item;
                        return <NavLink to={link} key={id} onClick={() => {
                            dispatch(closeSidebar())
                        }}>
                            {icon}
                            {title}
                        </NavLink>
                    })}
                    <NavLink to="/collection" onClick={() => {
                        dispatch(closeSidebar())
                    }}>
                        <CollectionIcon />
                        Collection
                    </NavLink>
                </>
                <div className="user-wrap">

                    {isAuthenticated ? <>
                        <div className="profile">
                            <img src={user.picture} alt={user.name} />
                            <span>{user.name}</span>
                        </div>
                        <button onClick={() => {
                            logout({
                                returnTo: window.location.origin
                            })
                        }}>Logout</button>
                    </>
                        :
                        <button onClick={() => {
                            loginWithRedirect()
                        }}>Login</button>
                    }

                </div>
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
    svg{
        width: 25px;
        height: 25px;
    }
    a{
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        padding: 10px 20px;
        border-radius: 10px;
        align-items: center;
        font-weight: 600;
        &:hover{
            background-color: ${colors.white};
        }
        svg{
            margin-right: 5px;
        }
    }
    .user-wrap{
        margin-top: 2rem;
        border-top: 1px solid ${colors.overlay_color};
        button{
            margin-top: 2rem;
            width: 100%;
            color: ${colors.main_color};
            background-color: ${colors.white};
            padding: 10px 20px;
            font-size: 1.5rem;
            border-radius: 10px;
            font-weight: 600;
            transition: all 0.3s linear;
            &:hover{
                background-color: ${colors.main_color};
                color: ${colors.white};
            }
        }
    }
    .profile{
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        align-items: center;
        font-weight: 600;
        span{
            font-size: 1.5rem;
        }
        img{
            width: 3.5rem;
            height: 3.5rem;
            margin-right: 10px;
            border-radius: 50%;
        }
    }
`

export default Sidebar