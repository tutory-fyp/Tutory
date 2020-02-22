import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import store from './src/redux/configureStore';
import { Provider } from 'react-redux';
import { setTopLevelNavigator } from './src/navigation/navigationService';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3185E8',
        accent: '#f1c40f',
        text: '#000000',
    },
};

export default function Main() {
    return (
        <Provider store={store} >
            <PaperProvider theme={theme}>
                <App 
                    ref={ navRef => {
                        setTopLevelNavigator(navRef);
                    } }
                />
            </PaperProvider>
        </Provider>
    );
}