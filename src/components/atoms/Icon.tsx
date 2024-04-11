import styled from '@emotion/styled';

interface Props {
    gray?: boolean;
}

export const Icon = styled.img<Props>`
    width: 30px;
    height: 30px;
    filter: ${(props) => (props.gray ? 'opacity(0.5)' : 'black')};
`;
