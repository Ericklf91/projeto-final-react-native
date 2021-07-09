import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../pages/home';
import CartScreen from '../../pages/cart';
import SubscriptionScreen from '../../pages/subscription';
import LoginScreen from '../../pages/login';
import CategoryScreen from '../../pages/category';
import ProductScreen from '../../pages/product';

const MainDrawer = createDrawerNavigator();

export default () => {
    return (
        <MainDrawer.Navigator initialRouteName="Home" >
            <MainDrawer.Screen name="Home" component={HomeScreen} />
            <MainDrawer.Screen name="Cadastro" component={SubscriptionScreen} />
            <MainDrawer.Screen name="Login" component={LoginScreen} />
            <MainDrawer.Screen name="Categorias" component={CategoryScreen} />
            <MainDrawer.Screen name="Produtos" component={ProductScreen} />
            <MainDrawer.Screen name="Carrinho" component={CartScreen} />
        </MainDrawer.Navigator>
    );
}