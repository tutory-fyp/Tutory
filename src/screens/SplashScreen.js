import React from 'react';
import NativeSplashScreen from 'react-native-splash-screen';
import 
{ 
    View, 
    ImageBackground,
    Text,
    StyleSheet,
    StatusBar 
} from 'react-native';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ImageBackground
                source={require('../../assets/Splash.png')}
                style={styles.bgStyle}
            >
                <StatusBar backgroundColor="#4C9BFA" />
                <Text>
                    This is the Splash Screen
                </Text>
            </ImageBackground>
        );
    }

    componentDidMount() {
        NativeSplashScreen.hide();
    }

}

const styles = StyleSheet.create({
    bgStyle: {
        height: '100%',
        width: '100%',
    }
});

export default SplashScreen;
