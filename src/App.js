import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import MainDrawer from './navigators/drawer';
import CarrinhoProvider from './context/CarrinhoProvider';

const App = () => {
    return (
        <CarrinhoProvider>
            <PaperProvider>
                <NavigationContainer>
                    <MainDrawer />
                </NavigationContainer>
            </PaperProvider>
        </CarrinhoProvider>
    );
}

export default App;