import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

//액션의 타입과 request 함수를 받아서 리덕스 사가에서 API 호출에 대한 공통 로직을 처리하는 함수
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); //로딩 시작 액션을 dispatch
    try {
      const response = yield call(request, action.payload);
      //성공하면 api응답 정보를 payload로 설정하여 dispatch
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
      //실패하면 에러 정보를 payload로 설정하고 error를 true로 하여 dispatch
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }

    yield put(finishLoading(type)); //로딩 끝 액션을 dispatch
  };
}
