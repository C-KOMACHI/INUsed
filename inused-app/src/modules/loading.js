import { createAction, handleActions } from 'redux-actions';

// 로딩 액션 정의
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType //액션의 payload로 requestType 전달
);

//createAction 으로 액션 함수 정의
export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType
);

const initialState = {};

//handleAction으로 리듀서 함수 정의
const loading = handleActions(
  {
    //로딩 시작
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true, //requestType에 대한 로딩 상태를 true로 변경
    }),
    //로딩 끝
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false, //requestType에 대한 로딩 상태를 false로 변경
    }),
  },
  initialState
);

export default loading;
