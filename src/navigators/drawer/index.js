import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from '../stack';
import { LoginStack } from '../stack';
import { CategoryStack } from '../stack';
import { ProductStack } from '../stack';
import { CartStack } from '../stack';

const MainDrawer = createDrawerNavigator();

export default () => {
    return (
        <MainDrawer.Navigator initialRouteName="Home" >
            <MainDrawer.Screen name="Home" component={HomeStack} />
            <MainDrawer.Screen name="Login" component={LoginStack} />
            <MainDrawer.Screen name="Categorias" component={CategoryStack} />
            <MainDrawer.Screen name="Produtos" component={ProductStack} />
            <MainDrawer.Screen name="Carrinho" component={CartStack} />
        </MainDrawer.Navigator>
    );
}