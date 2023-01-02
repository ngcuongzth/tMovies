import styled from "styled-components/macro"
import apiConfig from "../../api/apiConfig";
import noBg from '../../assets/img/no-bg.jpg'
import { colors } from '../../styled/variables'


const Casts = ({ casts }) => {
    return (
        <Wrapper>
            <Header>
                Casts
            </Header>
            {casts.length <= 0 ?
                <NotifyError>Can't find any information about the actor</NotifyError> :
                <Content>
                    {casts.map((cast, index) => {
                        const { name, profile_path } = cast;
                        let img = apiConfig.w500Image(profile_path);
                        if (profile_path === null) {
                            img = noBg;
                        }
                        return <div className="cast" key={index}>
                            <img src={img} alt={name} />
                            <p>{name}</p>
                        </div>
                    })}
                </Content>
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
    
`
const Header = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: .5rem;
`
const Content = styled.div`
    display: grid;
    gap: 15px;
     grid-template-columns: repeat(auto-fill,minmax(120px,1fr));
    img{
        border-radius: 5px;
        object-fit: cover;
        width: 100%;
        height: 180px;
    }
    p{
        text-align: center;
        font-size: 1rem;
        margin-top: 0.5rem;
        font-weight:400;
    }
    .error{
        font-weight: 600;
        color: ${colors.main_color};
    }
`

const NotifyError = styled.p`
    font-weight: 600;
    color: ${colors.main_color};
    letter-spacing: 2px;
    font-size: 1.2rem;
    font-style: italic;
`

export default Casts