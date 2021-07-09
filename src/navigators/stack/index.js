import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../pages/home';
import CartScreen from '../../pages/cart';
import SubscriptionScreen from '../../pages/subscription';
import LoginScreen from '../../pages/login';
import CategoryScreen from '../../pages/category';
import ProductScreen from '../../pages/product';
import CheckoutScreen from '../../pages/checkout';
import styles from './styles';

const MainStack = createStackNavigator();

export default ({ navigation }) => {
    return (
        <MainStack.Navigator screenOptions={{
            headerRight: () =>
                <TouchableOpacity 
                    onPress={() => navigation.toggleDrawer()}>
                    <Image style={styles.img}
                        source={{ uri: 'https://static.thenounproject.com/png/167204-200.png' }} />
                </TouchableOpacity>
        }}>
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Cadastro" component={SubscriptionScreen} />
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen name="Categorias" component={CategoryScreen} />
            <MainStack.Screen name="Produtos" component={ProductScreen} />
            <MainStack.Screen name="Carrinho" component={CartScreen} />
            <MainStack.Screen name="Checkout" component={CheckoutScreen} />
        </MainStack.Navigator>
    );
}