import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Icon } from '@iconify/react';
import Responsive from './Responsive';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: ${palette.blue[0]};
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    color: ${palette.gray[0]};
    width: 25px;
    height: 25px;
    cursor: pointer;
    display: flex;
    margin-left: 1rem;

    &:hover {
      color: ${palette.gray[1]};
    }
  }

  .searchIcon {
    display: none;
    color: ${palette.gray[0]};
    width: 27px;
    height: 27px;
    cursor: pointer;
    margin-right: 2rem;
    @media (max-width: 999px) {
      display: block;
    }
    margin-right: 0;

    &:hover {
      color: ${palette.gray[1]};
    }
  }
`;

const LogoImage = styled.img`
  width: 150px;
  margin-right: auto;
  display: flex;
`;

const SearchBar = styled.input`
  border: none;
  border-radius: 20px;
  padding-left: 2.5rem;
  padding-top: 0.3rem;

  outline: none;
  height: 35px;
  font-size: 0.8rem;
  width: 20rem;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Jua';
  @media (max-width: 1000px) {
    display: none;
  }

  //검색 아이콘
  background: url('https://api.iconify.design/ion/search.svg?color=%23aaa')
    no-repeat;
  background-size: 20px 20px;
  background-position: 13px center;
  background-color: white;
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => (
  <>
    <HeaderBlock>
      <Wrapper>
        <LogoImage src="Logo.png" alt="logo" />

        <SearchBar
          autoComplete="search"
          name="search"
          placeholder="물품을 검색해보세요"
        />
        <Icon className="searchIcon" icon="ion:search" />

        <Icon className="icon" icon="streamline:notification-alarm-2" />
      </Wrapper>
    </HeaderBlock>

    <Spacer />
  </>
);

export default Header;
