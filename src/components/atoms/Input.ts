import styled from '@emotion/styled';
import { COLOR } from '@/constants';

interface Props {
    small?: boolean;
    medium?: boolean;
    big?: boolean;
    search?: boolean;
}

export const Input = styled.input<Props>`
    border: 1.6px solid ${COLOR.gray.main};
    border-radius: 25px;
    height: ${(props) => {
        if (props.big) return '200px';
        return '50px';
    }};
    font-size: 0.9rem;
    width: ${(props) => {
        if (props.small) return '50%';
        if (props.medium) return '80%';
        return '100%';
    }};
    padding-bottom: ${(props) => (props.big ? '145px' : 'initial')};
    padding-left: 20px;
    font-family: 'Jua';
    outline: none;
`;
