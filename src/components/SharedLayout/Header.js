import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { transitions, breakpoints, sizes, colors } from '../../styled/variables'
import logo from '../../assets/img/logo.png'
import { SidebarIcon as SidebarSvg, CollectionIcon } from '../../utils/icons'
import { navLinks } from '../../utils/constants'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggle, closeSidebar } from '../../redux/features/sidebarSlice'
import { useAuth0 } from '@auth0/auth0-react'
import { toast } from 'react-toastify'
import { handleLogin, handleLogout } from '../../redux/features/userSlice'


const Header = () => {
    const dispatch = useDispatch();
    const [isShrink, setIsShrink] = useState(false);
    let { isOpen } = useSelector((state) => {
        return state.sidebar
    })
    const { collection, user: myUser } = useSelector((state) => {
        return state.user
    })

    const [isOpenLogout, setIsOpenLogout] = useState(false);
    const toggleIsOpenLogout = () => {
        setIsOpenLogout(!isOpenLogout)
    }
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            toast.success('Logged in successfully!')
            dispatch(handleLogin(user))
        }
        else {
            dispatch(handleLogout())
        }
        // eslint-disable-next-line
    }, [isAuthenticated])

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.scrollTop > 80 ||
                document.documentElement.scrollTop > 80) {
                if (!isShrink) {
                    setIsShrink(true);
                }
            }
            else {
                setIsShrink(false)
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        }
        // eslint-disable-next-line
    }, [isShrink])


    useEffect(() => {
        const resizeEvent = window.addEventListener("resize", () => {
            if (window.innerWidth >= 768 && isOpen) {
                dispatch(closeSidebar())
            }
        })
        return (() => {
            window.removeEventListener('resize', resizeEvent)
        })
        // eslint-disable-next-line
    }, [isOpen])

    return (
        <Wrapper className={`${isShrink && "shrink"}`}>
            <HeaderContainer className="container">
                <SidebarIcon onClick={() => {
                    dispatch(toggle())
                }}>
                    <SidebarSvg />
                </SidebarIcon>
                <Logo>
                    <img src={logo} alt="tmovie-logo" />
                    <Link to="/">tMovies</Link>
                </Logo>
                <Nav>
                    <ul>
                        {navLinks.map((item) => {
                            const { id, title, link, icon } = item;
                            return <li key={id}>
                                <NavLink to={link}>
                                    {icon}
                                    {title}
                                </NavLink>
                            </li>
                        })}
                    </ul>
                </Nav>
                <BtnWrap>
                    {myUser ?
                        <>
                            <li>
                                <NavLink to='/collection' className="collection">
                                    <CollectionIcon />
                                    <div className="total">
                                        {collection.length}
                                    </div>
                                </NavLink>
                            </li>

                            <div className="profile" onClick={() => {
                                toggleIsOpenLogout()
                            }}>
                                <span>Hi, {myUser.given_name}</span>
                                <img src={myUser.picture} alt={myUser.given_name} />
                            </div>
                        </>
                        :
                        <button className="small outline-btn"
                            onClick={() => {
                                loginWithRedirect()
                            }}
                        >
                            Login
                        </button>
                    }

                    {isOpenLogout &&
                        <div className="logout-btn"
                            onClick={() => {
                                logout({
                                    returnTo: window.location.origin
                                })
                                toast.success('Logged out!')
                            }}
                        >
                            Logout
                        </div>
                    }
                </BtnWrap>
            </HeaderContainer>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 8rem;
    width: 100%;
    transition: ${transitions.main_transition};
    z-index: 99;
    &.shrink{
        height: ${sizes.header_shrink_h};
        background-color: ${colors.black};
    }
    @media screen and (max-width: ${breakpoints.extra_extra_large}){
        height: ${sizes.header_rp_h};
    }
`
const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    height: 100%;
    transition: ${transitions.main_transition};
`

const SidebarIcon = styled.div`
    cursor: pointer;
    display: none;
    & svg{
        color: ${colors.text_color};
        width: 30px;
        height: 30px;
        transition: ${transitions.main_transition};
        &:hover{
            color: ${colors.main_color};
        }
    }
    @media screen and (max-width: ${breakpoints.medium}){
        display: block;
    }
`
const Logo = styled.div`
    font-size: 2.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    img{
        margin-right: 5px;
        width: 50px;
    }
    a{
        font-size: 2rem;
    }
    @media screen and (max-width: ${breakpoints.medium}){
        img{
            width: 30px;
            margin-right: 10px;
        }
    }
`

const Nav = styled.nav`
    ul{
        display: flex;
        align-items: center;
        justify-content: unset;
        gap: 2rem;
    }
    a{   
        padding: 5px 0px;
        font-weight: 700;
        position: relative;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        gap: 5px;
        &.active{
            color: ${colors.main_color};
        }
        svg{
            width: 25px;
        }
    }
    @media screen and (max-width: ${breakpoints.large}){
        svg{
            display: none;
        }
    }
    @media screen and (max-width: ${breakpoints.medium}){
        position: fixed;
        bottom: 0px;
        left: 0px;
        height: 5rem;
        width: 100%;
        background-color: ${colors.black};
        padding: 0px 2rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: unset;
        justify-content: unset;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        ul{
            width: 100%;
            justify-content: space-between;
        }
        li{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    `
const BtnWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    @media screen and (max-width: ${breakpoints.small}){
        button{
            display: none;
        }
    }
    svg{
        height: 30px;
        width: 30px;
    }
    .profile{
        cursor: pointer;
        display: flex; 
        gap: 5px;
        align-items: center;
        font-size: 1rem;
        font-weight: 400;
        img{
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
        }
        span{
            font-weight: 600;
        }
    }
    .logout-btn{
        position: absolute;
        top: 130%;
        left: 0;
        right: 0;
        padding: 10px;
        border-radius: 10px;
        background-color: ${colors.white};
        color: ${colors.main_color};
        font-weight: 600;
        text-align: center;
        box-shadow: ${colors.main_color} 0px -1px 24px;
        cursor: pointer;
    }
    .collection{
        position: relative;

        .total{
            position: absolute;
            top: -10px;
            right: 0;
            background-color: ${colors.main_color};
            color: ${colors.white};
            padding: 0 4px;
            border-radius: 10px;
            font-size: 1rem;
        }
    }
`

export default Header