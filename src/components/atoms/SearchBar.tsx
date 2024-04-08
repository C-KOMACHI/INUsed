import type { FC } from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
    border: none;
    border-radius: 20px;
    height: 45px;
    font-size: 0.9rem;
    width: 100%;
    text-align: 10px center;
    outline: none;
    background-image: url('./SearchIcon.png');
    background-size: 20px 20px;
    background-position: calc(100% - 15px) center;
    background-repeat: no-repeat;
    background-color: white;
    padding-left: 1.5rem;
    height: 40px;
`;

export const SearchBar: FC = () => {
    return <StyledInput placeholder="물품을 검색해 보세요" />;
};
