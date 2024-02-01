import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD'; //필드 변경 액션 정의
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; //폼 초기화 액션 정의

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, //register, login
    key, //userid, userpw, userpwConfirm, nickname
    value, //실제 바꾸려는 값
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); //register/login

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
    }),
  },
  initialState
);

export default auth;
