import styled from '@emotion/styled';

interface Props {
    disabledBorderRadius?: boolean;
    post?: boolean;
}

export const Image = styled.img<Props>`
    width: ${(props) => (props.post ? '100%' : '100px')};
    height: ${(props) => (props.post ? '250px' : '100px')};
    border-radius: ${(props) => (props.disabledBorderRadius ? '0px' : '8px')};
`;
