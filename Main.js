import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './App';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3185E8',
        accent: '#f1c40f',
    },
};

export default function Main() {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    );
}