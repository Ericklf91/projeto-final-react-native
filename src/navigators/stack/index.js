import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../pages/home';
import CartScreen from '../../pages/cart';
import SignUpScreen from '../../pages/signUp';
import SignInScreen from '../../pages/signIn';
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

const SignUpStackNavigation = createStackNavigator();
export const SignUpStack = ({ navigation }) => {
    return (
        <SignUpStackNavigation.Navigator screenOptions={{
            header: () => <Header
                leftComponent={{ onPress: () => navigation.navigate("Home"), icon: 'home', color: '#fff' }}
                centerComponent={{ text: 'CADASTRO', style: { color: '#fff' } }}
                rightComponent={{ onPress: () => navigation.toggleDrawer(), icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            />
        }}>
            <SignUpStackNavigation.Screen name="Cadastro" component={SignUpScreen} />
        </SignUpStackNavigation.Navigator>
    );
}

const SignInStackNavigation = createStackNavigator();
export const SignInStack = ({ navigation }) => {
    return (
        <SignInStackNavigation.Navigator screenOptions={{
            header: () => <Header
                leftComponent={{ onPress: () => navigation.navigate("Home"), icon: 'home', color: '#fff' }}
                centerComponent={{ text: 'LOGIN', style: { color: '#fff' } }}
                rightComponent={{ onPress: () => navigation.toggleDrawer(), icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            />
        }}>
            <SignInStackNavigation.Screen name="Login" component={SignInScreen} />
        </SignInStackNavigation.Navigator>
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