import styled from "styled-components/macro"
import HeaderPage from "../components/HeaderPage"
import Grid from "../components/Collection/Grid"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { toast } from 'react-toastify'

const Collection = () => {
    const [count, setCount] = useState(5);
    const { isLogin } = useSelector((state) => {
        return state.user;
    })
    useEffect(() => {
        if (!isLogin) {
            toast.error("The site is banned! Please login to use this feature!")
        }
    }, [isLogin])

    useEffect(() => {
        if (!isLogin) {
            const idTimeOut = setTimeout(() => {
                setCount((prev) => {
                    if (prev <= 0) {
                        return 0
                    }
                    return prev - 1
                })
                if (count <= 0) {
                    navigate('/')
                }
            }, 1000)
            return (() => {
                clearTimeout(idTimeOut)
            })
        }
        // eslint-disable-next-line
    }, [count])
    const navigate = useNavigate()
    return (
        <Wrapper className="container">
            <HeaderPage />
            {isLogin ? <Grid />
                : <Countdown className="container">
                    <h3>Back to the home page after {count} seconds</h3>
                </Countdown>
            }

        </Wrapper>
    )
}
const Countdown = styled.div`
    padding: 0 2rem;
    h3{
        font-size: 1.5rem;
        text-align: center;
    }
`
const Wrapper = styled.div`
    min-height: 100vh;
`
export default Collection