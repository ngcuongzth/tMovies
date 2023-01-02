import styled from 'styled-components/macro';
import { colors, border_radius, transitions, font_family } from '../styled/variables';
import { updateQuery } from '../redux/features/searchSlice';
import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovie, searchTvSeries } from '../redux/features/searchSlice';

const SearchForm = ({ type_search }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef();
    const [value, setValue] = useState('');
    return (
        <Wrapper className='container'>
            <Form onClick={(e) => {
                e.preventDefault();
            }}>
                <Input type="text"
                    placeholder='Enter keyword'
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    ref={inputRef}
                />
                <Button className="btn small"
                    onClick={() => {
                        if (value.trim()) {
                            dispatch(updateQuery(value.trim()));
                            if (type_search === "movie") {
                                navigate(`/movie/search/${value.trim()}`)
                                dispatch(searchMovie())
                            }
                            if (type_search === "tv") {
                                navigate(`/tv/search/${value.trim()}`);
                                dispatch(searchTvSeries())
                            }
                        }
                        if (value.length > 0 && !value.trim()) {
                            setValue("");
                            inputRef.current.focus();
                        }
                    }}
                >
                    Search
                </Button>
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 0 4rem;
    &.container{
        margin-bottom: 3rem;
    }
`

const Form = styled.form`
    position: relative;
    z-index: 10;
    max-width: 500px;
    width: 100%;
`
const Input = styled.input`
        width: 100%;
        background-color: ${colors.black};
        color: ${colors.text_color};
        border-radius: ${border_radius.main_border_radius};
        font-family: ${font_family};
        font-size: 1rem;
        padding: 0.25rem 1.25rem;
        border-color: transparent ;
        transition: ${transitions.main_transition};
        border: 1px solid transparent;
        &:focus{
            border: 1px solid ${colors.main_color};
        }
        &::placeholder{
            font-style: italic;
        }
`
const Button = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`
export default SearchForm