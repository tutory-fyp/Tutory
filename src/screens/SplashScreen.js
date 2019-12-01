import React from 'react';
import NativeSplashScreen from 'react-native-splash-screen';
import 
{ 
    View, 
    ImageBackground,
    Text,
    Image,
    StyleSheet,
    Animated,
    StatusBar 
} from 'react-native';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationCount: 0,
        };
        this.springValue = new Animated.Value(0.3);
        this.spring = this.spring.bind(this);
    }

    render() {
        return(
            <ImageBackground
                source={require('../../assets/Splash.png')}
                style={styles.bgStyle}
            >
                <StatusBar backgroundColor="#4C9BFA" />
                <View style={styles.container} >
                    <Animated.Image
                        style={{ ...styles.logo, transform: [{ scale: this.springValue }] }}
                        source={require('../../assets/logo.jpg')} />
                </View>
            </ImageBackground>
        );
    }

    spring() {
        if(this.state.animationCount < 1) {
            this.springValue.setValue(0.3)
            Animated.spring(
                this.springValue,
                {
                    toValue: 0.7,
                    friction: 1
                }
            ).start(this.spring);
            this.setState({ animationCount: this.state.animationCount + 1 });
        } else {
            this.props.navigation.navigate('Login');
        }
    }

    componentDidMount() {
        NativeSplashScreen.hide();
        //this.props.navigation.navigate('Dashboard');
        this.spring();
    }

}

const styles = StyleSheet.create({
    bgStyle: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    container: {
        flex: 1,
    },
    logo: {
        height: 400,
        width: 400,
        borderRadius: 120,
        alignSelf: 'center',
        marginTop: '10%',
    },
});

export default SplashScreen;
