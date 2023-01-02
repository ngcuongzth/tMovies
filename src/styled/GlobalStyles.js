import { createGlobalStyle } from "styled-components";
import {
    font_family, colors, transitions,
    shadows, breakpoints, border_radius
} from './variables'



const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        font: inherit;
        letter-spacing: 1px ;
    }
    html{
        font-size: 100%;
        @media screen and (max-width: ${breakpoints.large}){
            font-size: 80%;
        }
        @media screen and (max-width: ${breakpoints.medium}){
            font-size: 70%;
        }
    }
    body{
        font-family: ${font_family};
        font-weight: 400;
        line-height: 1.5;
        background-color: ${colors.body_color};
        color: ${colors.text_color};
        @media screen and (max-width: ${breakpoints.medium}){
            margin-bottom: 3rem;
        }
    }
    img, svg{
        display: block;
        max-width: 100%;
    }
    input{
        outline: none;
        font-family: ${font_family};
    }
    p, h1, h2, h3, h4, h5, h6{
        overflow-wrap: break-word;
    }
    a{
        text-decoration: none;
        cursor: pointer;
        transition: ${transitions.main_transition};
        line-height: normal;
        font-size: 1.5rem;
        color: inherit;
        &:hover{
            color: ${colors.main_color};
        }
    }
    iframe{
        border: 0;
    }
    ul, li{
        list-style-type: none;
    }
    
    .container{
        max-width: 1600px;
        margin: 0 auto;
    }
    .section{
        padding: 0 2rem;
    }
    
    button{
        cursor: pointer;
        font-family: ${font_family};
        &.small{
            padding: 0.25rem 1.25rem;
            font-size: 1rem;
            border-radius: 10px;
        }
        &.medium{
            border-radius: 10px;
            font-size: 1.2rem;
            padding: .3rem 1.2rem;
        }
    }
    .btn{
        padding: 0.5rem 1.8rem;
        font-size: 1.5rem;
        font-weight: 600;
        border: 4px solid transparent;
        border-radius: ${border_radius.main_border_radius};
        background-color: ${colors.main_color};
        color: ${colors.text_color};
        transition: ${transitions.main_transition};
        box-shadow: ${shadows.btn_shadow};
    }
    .btn:hover{
        background-color: ${colors.main_color};
        box-shadow: ${shadows.btn_shadow_hover};
    }
    .outline-btn{
        &:hover{
            color: ${colors.main_color};
            background-color: ${colors.white};
            border: 4px solid ${colors.white};
        }
        padding: 0.5rem 1.8rem;
        font-size: 1.5rem;
        font-weight: 600;
        border: 4px solid ${colors.white};
        border-radius: ${border_radius.main_border_radius};
        background-color: transparent;
        color: ${colors.text_color};
        transition: ${transitions.main_transition};
    }

    .scroll-to-top{
        svg{
            color: ${colors.main_color};
            width: 30px;
            height: 30px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(0.9);
        transition: ${transitions.main_transition};
        @media screen and (max-width: ${breakpoints.medium}){
            bottom: 80px;
        }
        &:hover{
            transform: scale(1);
            box-shadow: ${shadows.btn_shadow};
        }
    }

`

export default GlobalStyles