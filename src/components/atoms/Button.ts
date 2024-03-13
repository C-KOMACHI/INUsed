import styled from '@emotion/styled';
import { COLOR } from '@/constants';

export const Button = styled.button`
    border: none;
    font-size: 1rem;
    padding: 0.25rem 1rem;
    cursor: pointer;
    background: ${COLOR.blue.button};
    border-radius: 25px;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    height: '50px';
    font-size: 1.125rem;
    color: ${COLOR.white.main};
    font-family: 'Jua';
    &:hover {
        background: ${COLOR.blue.hover};
    }
`;
