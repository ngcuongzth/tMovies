import { Link } from 'react-router-dom'
import bg from '../../assets/img/footer-bg.jpg'
import logo from '../../assets/img/logo.png'
import styled from 'styled-components/macro'
import { footerLinks } from '../../utils/constants'
import { colors, transitions, breakpoints } from '../../styled/variables'


const Footer = () => {
    return (
        <Wrapper style={{
            backgroundImage: `url(${bg})`
        }}>
            <Logo className="footer__logo-wrap">
                <div className="logo-wrapper">
                    <img src={logo} alt="tmdb-logo" />
                    <Link to="/" className='main-link'>tMovies</Link>
                </div>
            </Logo>
            <Links className="footer-links">
                {footerLinks.map((item) => {
                    const { links, col_id } = item;
                    return <div
                        key={col_id}
                        className="col-links">
                        {links.map((link, index) => {
                            const { title } = link
                            return <Link to="/" key={index}>
                                {title}
                            </Link>
                        })}

                    </div>
                })}
            </Links>
        </Wrapper>
    )
}

const Logo = styled.div`
        .logo-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 3rem;
            gap: 1rem;
            font-size: 2.5rem;
            img{
                width: 50px;
            }
        }
`

const Links = styled.div`
 display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 10px;
        .col-links{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            font-weight: 600;
            font-size: 1.5rem;
            margin-top: 1rem;
            padding-left: 25%;
            a{
                font-weight: 500;
                margin-bottom: 1rem;
            }
        }
`
const Wrapper = styled.footer`
    padding: 6rem 2rem;
    a.main-link{
        font-size: 2rem;
        font-weight: 600;
    }
    a{
        font-size: 1.3rem;
        transition: ${transitions.main_transition};
        &:hover{
            color: ${colors.main_color};

        }
    }

@media screen and (max-width: ${breakpoints.large}){
    .footer__logo-wrap{
        .logo-wrapper{
            font-size: 2rem;
            img{
                width: 30px;
            }
        }
    }
    }
@media screen and (max-width: ${breakpoints.medium}){
    .footer-links{
        grid-template-columns: repeat(2,1fr);
    }
}

@media screen and (max-width: ${breakpoints.small}){
    .footer-links{
        grid-template-columns: repeat(1,1fr);
        .col-links{
            padding-left: 0;
            align-items: center;
        }
    }
}
`


export default Footer