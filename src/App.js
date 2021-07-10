import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import MainDrawer from './navigators/drawer';

const App = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <MainDrawer />
            </NavigationContainer>
        </PaperProvider>
    );
}

export default App;