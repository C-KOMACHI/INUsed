import styled from '@emotion/styled';
import { COLOR } from '@/constants';

interface Props {
    small?: boolean;
}

export const Input = styled.input<Props>`
    border: none;
    border-radius: 20px;
    height: 45px;
    font-size: 0.9rem;
    width: ${(props) => (props.small ? '60%' : '100%')};
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: 10px center;
    padding-left: 1rem;
    font-family: 'Jua';
    outline: none;

    &::placeholder {
        color: ${COLOR.gray.main};
    }
`;
