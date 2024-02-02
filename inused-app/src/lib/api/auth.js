import client from './client';

//로그인
export const login = ({ userid, userpw }) => {
  client.post('/api/v1/auth/login', { userid, userpw });
};

//회원가입
export const register = ({ nickname, userid, userpw }) => {
  client.post('api/v1/auth/register', { nickname, userid, userpw });
};
