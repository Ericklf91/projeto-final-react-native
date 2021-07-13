import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CheckoutStack, 
    HomeStack, 
    SignUpStack, 
    SignInStack, 
    CategoryStack,
    ProductStack,
    CartStack } from '../stack';

const MainDrawer = createDrawerNavigator();

export default () => {
    return (
        <MainDrawer.Navigator initialRouteName="Home" >
            <MainDrawer.Screen name="Home" component={HomeStack} />
            <MainDrawer.Screen name="Login" component={SignInStack} />
            <MainDrawer.Screen name="Categorias" component={CategoryStack} />
            <MainDrawer.Screen name="Produtos" component={ProductStack} />
            <MainDrawer.Screen name="Carrinho" component={CartStack} />
            <MainDrawer.Screen options={{
                title: "",
                headerShown: false, 
            }} name="Cadastro" component={SignUpStack} />
            <MainDrawer.Screen options={{
                title: "",
                headerShown: false, 
            }} name="Checkout" component={CheckoutStack} />
        </MainDrawer.Navigator>
    );
}