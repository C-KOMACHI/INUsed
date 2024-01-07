import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/**
 * 첫 화면이자 로그인 폼을 보여 줍니다.
 */

const LoginFormBlock = styled.div`
  p {
    color: ${palette.pink[1]};
    margin-top: 3rem;
    font-size: 0.8rem;
    font-family: 'Jura';
    text-align: center;
  }
`;

/**
 * 스타일링 된 input
 */
const StyledInput = styled.input`
  border: none;
  border-radius: 20px;
  padding-bottom: 0.5rem;
  outline: none;
  height: 45px;
  font-size: 0.9rem;
  width: 100%;
  display: flex;

  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Jua';
  &:focus {
  }
  & + & {
    margin-top: 0.5rem;
  }
`;

/**
 * 홈 하단에 비밀번호 찾기 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  a {
    color: ${palette.gray[1]};
    text-decoration: underline;
    font-size: 0.9rem;
    &:hover {
      color: ${palette.gray[0]};
    }
  }

  span {
    padding-right: 300px;
  }
`;
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const LoginForm = () => {
  return (
    <LoginFormBlock>
      <form>
        <StyledInput name="email" placeholder="학교 이메일" />
        <StyledInput name="password" placeholder="비밀번호" type="password" />

        <ButtonWithMarginTop pink="true" fullwidth="true">
          로그인
        </ButtonWithMarginTop>
      </form>
      <Footer>
        <Link to="/FindPassword">비밀번호 찾기</Link>
        <span />

        <Link to="/RegisterPage">회원가입</Link>
      </Footer>
      <p>Product By C-Komachi</p>
    </LoginFormBlock>
  );
};

export default LoginForm;
