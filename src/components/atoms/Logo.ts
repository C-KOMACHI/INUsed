import styled from '@emotion/styled';

interface Props {
    small?: boolean;
}

export const Logo = styled.img<Props>`
    width: ${(props) => (props.small ? '150px' : '330px')};
`;
