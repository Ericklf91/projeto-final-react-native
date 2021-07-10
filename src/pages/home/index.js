import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleSendButton = () => {
        navigation.navigate("Cadastro");
    }

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Enviar" onPress={handleSendButton} />
        </View>
    );
}

export default HomeScreen;