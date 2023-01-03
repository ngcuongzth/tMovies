import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading/MainLoading";
import styled from "styled-components";

const AuthWrapper = ({ children }) => {
    const { isLoading, error } = useAuth0()

    if (isLoading) {
        return <Wrapper>
            <Loading />
        </Wrapper>
    }
    if (error) {
        return <Wrapper>
            <h1>{error.message}</h1>
        </Wrapper>
    }
    return (
        <>
            {children}
        </>
    )
}

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    background-color: #ffffff89;
`

export default AuthWrapper