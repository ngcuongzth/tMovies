import { Wrapper } from "../Grid";
import { useSelector } from "react-redux"
import CardItem from "../CardItem";
import styled from "styled-components/macro";
import { breakpoints, colors } from "../../styled/variables";
import { useNavigate } from "react-router-dom";
const Grid = () => {
    const { collection } = useSelector((state) => {
        return state.user;
    })
    const navigate = useNavigate()
    if (collection.length < 1) {
        return <NoData className="container">
            <h1>No data found</h1>
            <button className="btn" onClick={() => {
                navigate('/')
            }}>
                Let's discover more!
            </button>
        </NoData>
    }
    else {
        return (
            <GridInherit>
                {
                    collection.map((item) => {
                        return <CardItem page="collection" navigatePathDetail={item.navigatePathDetail} key={item.id} id={item.id} {...item} />
                    })
                }
            </GridInherit>
        )
    }
}

const GridInherit = styled(Wrapper)`
`
const NoData = styled.section`
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 4rem;
        text-align: center;
        color: ${colors.white};
        font-weight: 600;
        @media screen and (max-width: ${breakpoints.small}){
            font-size: 2rem;
        }
    }
    button{
        margin-top: 2rem;
         @media screen and (max-width: ${breakpoints.small}){
            font-size: 1rem;
        }
    }
`

export default Grid