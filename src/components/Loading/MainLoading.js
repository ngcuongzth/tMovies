import React from 'react'
import { PuffLoader } from "react-spinners";
import styled from "styled-components/macro";
import { colors } from '../../styled/variables'


const Loading = () => {
    return <Wrapper>
        <PuffLoader color={colors.main_color}
            size={125} />
    </Wrapper>
}

const Wrapper = styled.article`
    position: fixed;
    top: 0;
    right: 0;
    left:0;
    bottom: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.overlay_color};
    `
export default Loading