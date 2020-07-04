import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  INIT_STATE,
  SET_USER,
} from './actionTypes';

const initialState = {
  user: null,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_STATE: {
      return { ...initialState };
    }
    case LOGIN_SUCCESS: {
      return { ...state, user: action.payload, error: '' };
    }
    case LOGIN_ERROR: {
      return { ...state, user: null, error: action.payload };
    }
    case SET_USER: {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
