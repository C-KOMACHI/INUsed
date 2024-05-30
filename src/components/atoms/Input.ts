import styled from '@emotion/styled';
import { COLOR } from '@/constants';

interface Props {
    small?: boolean;
    medium?: boolean;
    big?: boolean;
    search?: boolean;
    disabledBorderRadius?: boolean;
    disabledBorder?: boolean;
    bigFont?: boolean;
    keyword?: boolean;
}

export const Input = styled.input<Props>`
    border: ${(props) => (props.disabledBorder ? 'none' : `1.6px solid ${COLOR.gray.main}`)};
    border-radius: ${(props) => (props.disabledBorderRadius ? '10px' : '25px')};
    height: ${(props) => {
        if (props.big) return '200px';
        return '50px';
    }};
    font-size: ${(props) => (props.bigFont ? '1rem' : '0.9rem')};
    width: ${(props) => {
        if (props.small) return '50%';
        if (props.medium) return '80%';
        if (props.keyword) return '70%';
        return '100%';
    }};
    padding-bottom: ${(props) => (props.big ? '145px' : 'initial')};
    padding-left: 20px;
    font-family: 'Jua';
    outline: none;
`;
