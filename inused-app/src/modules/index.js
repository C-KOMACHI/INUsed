import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  //루트 리듀서: 여러 리듀서를 합침
  auth, //로그인, 회원가입 리듀서
  loading, //로딩 리듀서
});

export function* rootSaga() {
  yield all([authSaga()]);
}
export default rootReducer;
