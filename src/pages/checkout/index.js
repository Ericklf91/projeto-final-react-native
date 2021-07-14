import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import styles from "../checkout/styles";


const CheckoutScreen = () => {
    return (
        <Card>
            <Card.Title>Obrigado pela compra</Card.Title>
            <Card.Divider />
            <Card.Image style={styles.img} source={require('../../assets/cart.png')}>
            </Card.Image>
            <Text style={styles.text}> Volte sempre </Text> 
        </Card>
    );
}

export default CheckoutScreen;

