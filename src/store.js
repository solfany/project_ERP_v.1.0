import { createStore } from 'redux';
import { SET_USER, SET_INIT, UPDATE_USER } from 'actions';

// redux-persist
import storage from 'redux-persist/lib/storage'; // 로컬 스토리지를 사용하려면 이것을 가져와야 함
import { persistStore, persistReducer } from 'redux-persist';

// 초기 상태 정의
const initialState = {
  userObj: null,
  init: false,
};

// 리듀서 정의
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userObj: action.payload,
        init: true,
      };
    case SET_INIT:
      return {
        ...state,
        init: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        userObj: action.payload,
      };
    default:
      return state;
  }
};

// Redux Persist configuration 정의
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
  initialState
);

// 스토어 생성
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
