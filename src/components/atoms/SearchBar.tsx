import { useRef } from 'react';
import type { FC, KeyboardEvent } from 'react';
import { debounce } from 'lodash';
import styled from '@emotion/styled';
import { useFlow } from '@/stackflow';

const StyledInput = styled.input`
    border: none;
    border-radius: 20px;
    height: 40px;
    font-size: 0.97rem;
    width: 100%;
    outline: none;
    background-repeat: no-repeat;
    border: none;
    background: url('https://api.iconify.design/ion/search.svg?color=%23aaa') no-repeat;
    background-size: 25px 25px;
    background-color: white;
    padding-left: 2.8rem;
    margin: 0 0 0 12px;
    background-position: 10px center;
`;

export const SearchBar: FC = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const { push } = useFlow();
    

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && searchRef.current?.value) {
            push('Search', { text: searchRef.current?.value });
        }
    };

    const debounceHandleKeyPress = debounce(handleKeyPress, 500);

    return <StyledInput id="search" placeholder="물품을 검색해 보세요" ref={searchRef} onKeyUp={debounceHandleKeyPress} />;
};
