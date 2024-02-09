import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Icon } from '@iconify/react';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;

  background: ${palette.blue[0]};
`;

const Wrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    color: ${palette.gray[0]};
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 2rem;
    cursor: pointer;

    &:hover {
      color: ${palette.gray[1]};
    }
  }
`;

const LogoImage = styled.img`
  width: 180px;
  margin-left: 2rem;
  margin-right: 2rem;
  @media screen and (max-width: 426px) {
    display: none;
  }
`;

const SearchBar = styled.input`
  border: none;
  border-radius: 20px;
  padding-left: 2.5rem;
  padding-top: 0.3rem;
  outline: none;
  height: 40px;
  font-size: 0.9rem;
  margin-left: 5rem;
  width: 20rem;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Jua';
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

        <Icon className="icon" icon="streamline:notification-alarm-2" />
      </Wrapper>
    </HeaderBlock>

    <Spacer />
  </>
);

export default Header;
