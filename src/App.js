import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigators/stack';
import MainDrawer from './navigators/drawer';

const App = () => {
    return (
        <NavigationContainer>
            <MainStack>
                <MainDrawer />
            </MainStack>
        </NavigationContainer>
    );
}

export default App;