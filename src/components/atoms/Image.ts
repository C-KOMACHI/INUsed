import styled from '@emotion/styled';

interface Props {
    disabledBorderRadius?: boolean;
}

export const Image = styled.img<Props>`
    width: 100%;
    height: 100%;
    border-radius: ${(props) => (props.disabledBorderRadius ? '0px' : '8px')};
`;
