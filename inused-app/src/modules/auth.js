import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD'; //필드 변경 액션 정의
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; //폼 초기화 액션 정의

const REGISTER = 'auth/REGISTER'; //회원가입 요청 액션 정의
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS'; //회원가입 성공 액션 정의
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE'; //회원가입 실패 액션 정의

const LOGIN = 'auth/LOGIN'; //로그인 요청 액션 정의
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'; //로그인 성공 액션 정의
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE'; //로그인 실패 액션 정의

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, //register, login
    key, //userid, userpw, userpwConfirm, nickname
    value, //실제 바꾸려는 값
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); //register/login

//회원가입 액션 함수
export const register = createAction(
  REGISTER,
  ({ nickname, userid, userpw }) => ({
    nickname,
    userid,
    userpw,
  })
);

//로그인 액션 함수
export const login = createAction(LOGIN, ({ userid, userpw }) => ({
  userid,
  userpw,
}));

//사가 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

//각 액션에 대한 사가 함수 등록
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}
const initialState = {
  //초깃값 설정
  register: {
    nickname: '',
    userid: '',
    userpw: '',
    userpwConfirm: '',
  },
  login: {
    userid: '',
    userpw: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  //auth 리듀서 생성
  {
    //CHANGE_FIELD, INITIALIZE_FORM 두 가지 액션 처리
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        //immer의 produce를 사용하여 불변성 유지
        draft[form][key] = value; //상태의 draft를 만들어 불변성을 유지하고, 지정된 form과 key의 필드를 새 값으로 업데이트
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form], //폼 초기화
      authError: null, //폼 전환 시 회원 인증 에러 초기화
    }),
    //회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: { auth } }) => ({
      ...state,
      authError: null,
      auth,
    }),
    //회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: { error } }) => ({
      ...state,
      authError: error,
    }),
    //로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: { auth } }) => ({
      ...state,
      authError: null,
      auth,
    }),
    //로그인 실패
    [LOGIN_FAILURE]: (state, { payload: { error } }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default auth;
