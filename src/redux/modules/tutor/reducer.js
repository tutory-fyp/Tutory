import {
    INIT_STATE,
    SET_IS_LOADING,
} from './actionTypes';

const initialState = {
    isLoading: false,
    filter: {},
    tutors: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INIT_STATE: {
            return initialState;
        }
        case SET_IS_LOADING: {
            return {...state, isLoading: action.payload};
        }
        default: {
            return state;
        }
    }
}

export default reducer;