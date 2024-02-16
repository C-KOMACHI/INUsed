import styled from '@emotion/styled';
import { COLOR } from '@/constants';

export const LoginButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    padding: 0.25rem 1rem;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: ${COLOR.blue.button};
    border-radius: 20px;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
    color: ${COLOR.white.main};
    font-family: 'Jua';
    &:hover {
        background: ${COLOR.blue.hover};
    }
`;
