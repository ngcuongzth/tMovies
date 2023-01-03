import styled from "styled-components/macro";
import { colors } from '../../styled/variables'


const Loading = () => {
    return <Wrapper>
        <div className="loader">
            <div className="loader-item">
                <div className="loader-item">
                    <div className="loader-item">
                        <div className="loader-item">
                            <div className="loader-item">
                                <div className="loader-item" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    
  
  .loader {
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .loader-item {
    position: absolute;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    border: 2px solid transparent;
    border-top-color: #ff3e00;
    border-radius: 50%;
    animation: spin 4.2s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
    `
export default Loading