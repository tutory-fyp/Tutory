import auth from '@react-native-firebase/auth';
import {
    loginSuccess,
    loginFailed,
} from './actionCreators';

const login = (email, password) => {
    return async (dispatch) => {
        try {
            let { user } = await auth().signInWithEmailAndPassword(email, password);
            dispatch(loginSuccess(user));
        } catch (error) {
            dispatch(loginFailed(error.code));
        }
    }
}

export {
    login,
}