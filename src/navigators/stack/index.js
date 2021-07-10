import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../pages/home';
import CartScreen from '../../pages/cart';
import SubscriptionScreen from '../../pages/subscription';
import LoginScreen from '../../pages/login';
import CategoryScreen from '../../pages/category';
import ProductScreen from '../../pages/product';
import CheckoutScreen from '../../pages/checkout';
import { Header } from 'react-native-elements';
import styles from './styles';

const HomeStackNavigation = createStackNavigator();
export const HomeStack = ({ navigation }) => {
    return (
        <HomeStackNavigation.Navigator screenOptions={{
            header: () => <Header
                leftComponent={{ onPress: () => navigation.navigate("Home"), icon: 'home', color: '#fff' }}
                centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
                rightComponent={{ onPress: () => navigation.toggleDrawer(), icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            />
        }}>
            <HomeStackNavigation.Screen name="Home" component={HomeScreen} />
        </HomeStackNavigation.Navigator>
    );
}

const SubscriptionStackNavigation = createStackNavigator();
export const SubscriptionStack = ({ navigation }) => {
    return (
        <SubscriptionStackNavigation.Navigator screenOptions={{
            header: () => <Header
                leftComponent={{ onPress: () => navigation.navigate("Home"), icon: 'home', color: '#fff' }}
                centerComponent={{ text: 'CADASTRO', style: { color: '#fff' } }}
                rightComponent={{ onPress: () => navigation.toggleDrawer(), icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            />
        }}>
            <SubscriptionStackNavigation.Screen name="Cadastro" component={SubscriptionScreen} />
        </SubscriptionStackNavigation.Navigator>
    );
}

const LoginStackNavigation = createStackNavigator();
export const LoginStack = ({ navigation }) => {
    return (
        <LoginStackNavigation.Navigator screenOptions={{
            header: () => <Header
                leftComponent={{ onPress: () => navigation.navigate("Home"), icon: 'home', color: '#fff' }}
                centerComponent={{ text: 'LOGIN', style: { color: '#fff' } }}
                rightComponent={{ onPress: () => navigation.toggleDrawer(), icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            />
        }}>
            <LoginStackNavigation.Screen name="Login" component={LoginScreen} />
        </LoginStackNavigation.Navigator>
    );
}

const CategoryStackNavigation = createStackNavigator();
export const CategoryStack = ({ navigation }) => {
    return (
        <CategoryStackNavigation.Navigator screenOptions={{
            header: () => <Header
                leftComponent={{ onPress: () => navigation.navigate("Home"), icon: 'home', color: '#fff' }}
                centerComponent={{ text: 'CATEGORIAS', style: { color: '#fff' } }}
                rightComponent={{ onPress: () => navigation.toggleDrawer(), icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            />
        }}>
            <CategoryStackNavigation.Screen name="Categoria" component={CategoryScreen} />
        </CategoryStackNavigation.Navigator>
    );
}

const ProductStackNavigation = createStackNavigator();
export const ProductStack = ({ navigation }) => {
    return (
        <ProductStackNavigation.Navigator screenOptions={{
            header: () => <Header
                leftComponent={{ onPress: () => navigation.navigate("Home"), icon: 'home', color: '#fff' }}
                centerComponent={{ text: 'PRODUTOS', style: { color: '#fff' } }}
                rightComponent={{ onPress: () => navigation.toggleDrawer(), icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            />
        }}>
            <ProductStackNavigation.Screen name="Produtos" component={ProductScreen} />
        </ProductStackNavigation.Navigator>
    );
}

const CartStackNavigation = createStackNavigator();
export const CartStack = ({ navigation }) => {
    return (
        <CartStackNavigation.Navigator screenOptions={{
            header: () => <Header
                leftComponent={{ onPress: () => navigation.navigate("Home"), icon: 'home', color: '#fff' }}
                centerComponent={{ text: 'CARRINHO', style: { color: '#fff' } }}
                rightComponent={{ onPress: () => navigation.toggleDrawer(), icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            />
        }}>
            <CartStackNavigation.Screen name="Carrinho" component={CartScreen} />
        </CartStackNavigation.Navigator>
    );
}

const CheckoutStackNavigation = createStackNavigator();
export const CheckoutStack = ({ navigation }) => {
    return (
        <CheckoutStackNavigation.Navigator screenOptions={{
            header: () => <Header
                leftComponent={{ onPress: () => navigation.navigate("Home"), icon: 'home', color: '#fff' }}
                centerComponent={{ text: 'CHECKOUT', style: { color: '#fff' } }}
                rightComponent={{ onPress: () => navigation.toggleDrawer(), icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            />
        }}>
            <CheckoutStackNavigation.Screen name="Checkout" component={CheckoutScreen} />
        </CheckoutStackNavigation.Navigator>
    );
}