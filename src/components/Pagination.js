import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { colors } from '../styled/variables';


export default function PaginationRounded({ totalPages, currentPage, changePage }) {

    const [page, setPage] = useState(currentPage);
    const dispatch = useDispatch();

    const handleChange = (event, value) => {
        setPage(value);
    };
    useEffect(() => {
        dispatch(changePage(page))
        // eslint-disable-next-line
    }, [page])

    return (
        <Wrapper>
            <Stack spacing={3}>
                <Pagination
                    count={totalPages}
                    variant="outlined"
                    shape="rounded"
                    page={currentPage}
                    onChange={handleChange}
                />
            </Stack>
        </Wrapper>
    );
}

const Wrapper = styled.article`
    color: ${colors.white};
    margin: 3rem 0;
    .css-wjh20t-MuiPagination-ul{
        justify-content: center;
        gap: 3px;
    }
    .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root{
        color: ${colors.white};
        border-color: ${colors.white};
        font-weight: 600;
        &:hover{
            color: ${colors.main_color};
            border-color: ${colors.main_color};
        }
    }
    .css-1v2lvtn-MuiPaginationItem-root{
        color: ${colors.white}
    }
    .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected{
        color: ${colors.main_color};
        border-color: ${colors.main_color};
    }
`