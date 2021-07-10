import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawer from './navigators/drawer';

const App = () => {
    return (
        <NavigationContainer>
            <MainDrawer />
        </NavigationContainer>
    );
}

export default App;