import {LOGIN} from './actionTypes';

const initialState = {
    login: {
        userID: "",
        error: "",
        loading: false,
    },
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN: {
            return {
                login: {
                    userID: action.payload.userID,
                    error: null,
                    loading: false,
                }
            }
        }
        default: return state;
    }
}

export default reducer;