import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';

const rootReducer = combineReducers({
  //루트 리듀서: 여러 리듀서를 합침
  auth, //로그인, 회원가입 리듀서
  loading, //로딩 리듀서
});

export default rootReducer;
