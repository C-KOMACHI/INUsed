import styled from '@emotion/styled';
import { COLOR } from '@/constants';

interface Props {
    small?: boolean;
    medium?: boolean;
    search?: boolean;
}

export const Input = styled.input<Props>`
    border: 1.6px solid ${COLOR.gray.main};
    border-radius: 25px;
    height: 50px;
    font-size: 0.9rem;
    width: ${(props) => {
        if (props.small) return '50%';
        if (props.medium) return '80%';
        return '100%';
    }};

    text-align: 10px center;
    padding-left: 10px;
    font-family: 'Jua';
    outline: none;

    //검색 아이콘
    ${(props) =>
        props.search &&
        `
            background: url('https://api.iconify.design/ion/search.svg?color=%23aaa') no-repeat;
            background-size: 20px 20px;
            background-position: 13px center;
            background-color: white;
            padding-left: 2.5rem;
            margin: 0 0 0 12px;
            height: 40px;
          `}

    &::placeholder {
        color: ${COLOR.gray.main};
    }
`;
