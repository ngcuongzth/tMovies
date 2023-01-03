import styled from 'styled-components/macro'
import { PlayIcon } from '../utils/icons'
import noBg from '../assets/img/no-bg.jpg'
import { useDispatch, useSelector } from 'react-redux'
import apiConfig from '../api/apiConfig'
import { useNavigate } from 'react-router-dom'
import { border_radius, colors, transitions } from '../styled/variables'
import { updateId } from '../redux/features/detailSlice'
import { addCollectionItem, removeCollectionItem } from '../redux/features/userSlice'
import { toast } from 'react-toastify'

const CardItem = ({ id, poster_path, backdrop_path, name, title, navigatePathDetail, page }) => {

  const { isLogin } = useSelector((state) => {
    return state.user;
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let bg;
  if (poster_path === null && backdrop_path === null) {
    bg = noBg;
  }
  else {
    bg = apiConfig.w500Image(poster_path || backdrop_path);
  }
  return (
    <Wrapper>
      <div className="card-content">
        <img src={bg} alt="" className="thumb-bg" />
        <button className="btn link-btn"
        >
          <div onClick={() => {
            navigate(`${navigatePathDetail}/${id}`)
            dispatch(updateId(id))
          }}>
            <PlayIcon />
          </div>
        </button>
        {page === "collection" ?
          <button className="favourite-btn" onClick={() => {
            if (isLogin) {
              dispatch(removeCollectionItem({
                id, navigatePathDetail
              }))
            }
            else {
              toast.warning('Please login to use this feature')
            }
          }}>
            remove
          </button>
          :
          <button className="favourite-btn" onClick={() => {
            if (isLogin) {
              dispatch(addCollectionItem({
                id, poster_path, backdrop_path, name, title, navigatePathDetail
              }))
            }
            else {
              toast.warning('Please login to use this feature')
            }
          }}>
            + collection
          </button>
        }
      </div>
      <h3 className="card-title">
        {title || name}
      </h3>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.card-content{
  position: relative;
  border-radius: ${border_radius.secondary_border_radius};
  overflow: hidden;
  width: 100%;
  padding-top: 160%;
}
  .thumb-bg{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom:0;
    height: 100%;
    object-fit: cover;
    
  }
  .link-btn{
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%,-50%) scale(0);
    & svg{
      width: 2.5rem;
    }
  }
  .favourite-btn{
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;
    transform: scale(0);
    transition: ${transitions.main_transition};
    border-color: transparent;
    background-color: transparent;
    background-color: ${colors.white};
    border-radius: 20px;
    color: ${colors.main_color};
    font-weight: 600;
    padding: 0 5px;
    border: 1px solid ${colors.main_color};
    :hover{
      background-color: ${colors.main_color};
      color: ${colors.white};
    border: 1px solid ${colors.white};
    }    
  }
  .card-title{
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
    margin-top: 2rem;
    &:hover{
      cursor: default;
    }
  }
  &:hover{
    .favourite-btn{
      transform: scale(1);
    }
    .link-btn{
      transform: translate(-50%,-50%) scale(1);
    }
  }
`

export default CardItem