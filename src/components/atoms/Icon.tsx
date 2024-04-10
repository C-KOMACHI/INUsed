import styled from '@emotion/styled';

interface Props {
    gray?: boolean;
}

export const Icon = styled.img<Props>`
    width: 50%;
    height: 50%;
    filter: ${(props) => (props.gray ? 'opacity(0.4)' : 'black')};
`