import type { FC } from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
    border: none;
    border-radius: 20px;
    height: 45px;
    font-size: 0.9rem;
    width: 100%;
    outline: none;
    background-repeat: no-repeat;
    border: none;
    background: url('https://api.iconify.design/ion/search.svg?color=%23aaa') no-repeat;
    background-size: 20px 20px;
    background-color: white;
    padding-left: 2.5rem;
    margin: 0 0 0 12px;
    height: 40px;
    background-position: 10px center;
`;

export const SearchBar: FC = () => {
    return <StyledInput placeholder="물품을 검색해 보세요" />;
};
