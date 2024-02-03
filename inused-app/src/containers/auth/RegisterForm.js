import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const [nicknameError, setnicknameError] = useState(null);
  const [emailError, setemailError] = useState(null);
  const [nicknameConfirm, setnicknameConfirm] = useState(null);
  const [emailConfirm, setemailConfirm] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register, // register form 선택
    auth: auth.auth,
    authError: auth.authError,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();

    const { nickname, userid, userpw, userpwConfirm } = form;
    //한 칸이라도 비어 있다면
    if ([nickname, userid, userpw, userpwConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }

    //닉네임 중복 검사가 되지 않았을 때
    if (nicknameConfirm === null) {
      setError('닉네임 중복 검사를 해주세요.');
      return;
    }
    if (nicknameError) {
      return;
    }

    //이메일 인증이 되지 않았을 때
    if (emailConfirm === null) {
      setError('이메일 인증을 해주세요.');
      return;
    }
    if (emailError) {
      return;
    }

    //비밀번호 일치하지 않으면
    if (userpw !== userpwConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      //비밀번호 칸과 비밀번호 확인 칸을 빈칸으로 바꾸기
      dispatch(changeField({ form: 'register', key: 'userpw', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'userpwConfirm', value: '' })
      );
      return;
    }

    dispatch(register({ nickname, userid, userpw }));
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  //닉네임 중복 확인 이벤트 핸들러
  const checkNickname = (e) => {
    e.preventDefault();
    const { nickname } = form;
    //TODO: 닉네임 중복 검사 API 호출 및 처리
    if ([nickname].includes('')) {
      setnicknameError('닉네임을 입력해주세요.');
    }
    if (authError) {
      if (authError.response.status === 409) {
        setnicknameError('이미 존재하는 닉네임입니다.');
      }
    }
    setnicknameConfirm('닉네임 확인 완료');
  };

  //이메일 인증 이벤트 핸들러
  const sendEmailVerification = (e) => {
    e.preventDefault();
    const { userid } = form;
    //TODO: 이메일 인증 API 호출 및 처리
    if ([userid].includes('')) {
      setemailError('이메일을 입력해주세요.');
    }
    if (authError) {
      if (authError.response.status === 409) {
        setemailError('이미 존재하는 이메일입니다.');
      }
    }
    setemailConfirm('이메일 인증 완료');
  };

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      navigate('/');
    }
  }, [auth, authError, navigate]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      checkNickname={checkNickname}
      sendEmailVerification={sendEmailVerification}
      error={error}
      nicknameError={nicknameError}
      emailError={emailError}
    />
  );
};

export default RegisterForm;
