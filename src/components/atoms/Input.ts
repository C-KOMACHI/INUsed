import styled from '@emotion/styled';
import { COLOR } from '@/constants';

interface Props {
    small?: boolean;
    medium?: boolean;
    search?: boolean;
}

export const Input = styled.input<Props>`
    border: none;
    border-radius: 20px;
    height: 45px;
    font-size: 0.9rem;
    width: ${(props) => {
        if (props.small) return '50%';
        if (props.medium) return '80%';
        return '100%';
    }};

    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
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
