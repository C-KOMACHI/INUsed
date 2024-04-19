import styled from '@emotion/styled';

interface Props {
    gray?: boolean;
    white?: boolean;
    big?: boolean;
    small?: boolean;
}

export const Icon = styled.img<Props>`
    ${(props) => {
        if (props.big) {
            return `
                width: 60px;
                height: 60px;
            `;
        }
        if (props.small) {
            return `
                width: 20px;
                height: 20px;
            `;
        }
        return `
            width: 30px;
            height: 30px;
        `;
    }}

    filter: ${(props) => {
        if (props.gray) {
            return 'opacity(0.4)';
        }
        if (props.white) {
            return 'brightness(0) invert(1)';
        }
        return 'none';
    }};
`;
