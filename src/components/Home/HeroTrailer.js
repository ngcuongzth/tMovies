import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux'
import { CloseIcon } from '../../utils/constant'
import { colors, breakpoints, transitions } from '../../styled/variables'
import { closeTrailerModal } from '../../redux/features/heroSlice'


const TrailerModal = (props) => {
    const { idTrailer, noTrailer, trailerSrc } = useSelector((state) => {
        return state.hero;
    })
    const dispatch = useDispatch();
    const { id } = props;

    return (
        <ModalWrapper className={`${id === idTrailer ? "active" : ""}`} id={`modal_${id}`}
            onClick={() => {
                dispatch(closeTrailerModal())
            }}
        >
            <div className="modal-content">
                <button className="close-btn" onClick={() => {
                    dispatch(closeTrailerModal())
                }}>
                    <CloseIcon />
                </button>
                {
                    noTrailer ? <h2 className="no-trailer">Not found trailer</h2> :
                        <iframe src={trailerSrc}
                            width="100%"
                            height="500px"
                            title="trailer"
                        ></iframe>
                }
            </div>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    opacity: 0;
    visibility: hidden;
    &.active{
        opacity: 1;
        visibility: visible;
        .modal-content{
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }
    .modal-content{
        padding: 3rem;
        background-color: ${colors.body_color};
        width: 80%;
        opacity: 0;
        transform: translateY(-250px);
        transition: transform 0.6s ease, opacity 0.6s ease;
        position: relative;
        border-radius: 10px;
    }
    .close-btn{
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: transparent;
        border: transparent;
        svg{
            color: ${colors.text_color};
            width: 3rem;
            height: 3rem;
            transition: ${transitions.main_transition};
        }
        &:hover{
            svg{
                color: ${colors.main_color};
            }
        }
    }  
    .no-trailer{
        margin: 40px 0;
        font-size: 2rem;
        text-align: center;
    }
    @media screen and (max-width: ${breakpoints.large}){
        .modal-content{
            width: 80%;
        }
        .active .modal-content{
            opacity: 1;
        transform: translateY(0);
        }
        iframe{
            height: 400px;
        }
    }
`
export default TrailerModal