import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text, Button } from 'react-native-elements';
import styles from './styles';

const SignInScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSignUpButton = () => {
        navigation.navigate("Cadastro");
    }

    const handleSignInButton = () => {
        alert("Você está logado");
        navigation.navigate("Checkout")
    }

    return (
        <View style={styles.container}>
            <Text h4 style={styles.text}>Já é cadastrado? Faça seu login</Text>
            <Input value={email}
                onChangeText={t => setEmail(t)}
                style={styles.textInput} leftIcon={<Icon
                    name='envelope'
                    size={24}
                    color='black'
                />}
                label="E-mail" placeholder="E-mail" />
            <Input value={senha}
                onChangeText={t => setSenha(t)}
                style={styles.textInput} leftIcon={<Icon
                    name='lock'
                    size={24}
                    color='black'
                />}
                label="Senha" placeholder="Password" secureTextEntry={true} />
            <Button title="Logar" onPress={handleSignInButton} />
            <TouchableOpacity onPress={handleSignUpButton}>
                <Text style={styles.text}>Crie sua conta grátis</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignInScreen;