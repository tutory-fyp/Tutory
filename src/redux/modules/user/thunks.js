import auth from '@react-native-firebase/auth';

const loginUser = (email, password) => {
    return (dispatch) => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            this.setState({ loading: false });
        } catch (error) {
            this.setState({ loading: false });
            Alert.alert(
                'Login Failed',
                'Email or Password is Incorrect',
                [
                    { text: 'OK' },
                ],
                { cancelable: true },
            );
            console.log(error.code);
            return;
        }
    }
} 