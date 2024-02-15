import styled from '@emotion/styled';
import { COLOR } from '@/constants';

export const Input = styled.input`
    border: none;
    border-radius: 20px;
    height: 45px;
    font-size: 0.9rem;
    width: 100%;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: 10px center;
    padding-left: 1rem;
    font-family: 'Jua';
    font-color: ${COLOR.gray.input};
    outline: none;
`;
