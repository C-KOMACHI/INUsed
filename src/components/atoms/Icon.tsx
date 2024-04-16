import styled from '@emotion/styled';

interface Props {
    gray?: boolean;
    big?: boolean;
}

export const Icon = styled.img<Props>`
    width: ${(props) => (props.big ? '60px' : '30px')};
    height: ${(props) => (props.big ? '60px' : '30px')};
    filter: ${(props) => (props.gray ? 'opacity(0.4)' : 'black')};
`;
