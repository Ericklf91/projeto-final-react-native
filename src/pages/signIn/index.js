import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text, Button } from 'react-native-elements';
import api from '../../services/api';
import styles from './styles';

const SignInScreen = () => {
    const navigation = useNavigation();
    const [cliente, setCliente] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSignUpButton = () => {
        navigation.navigate("Cadastro");
    }

    const validaCliente = (email, senha) => {
        console.log(email, senha);
        api.get(`/cliente/validar/${email}/${senha}`)
            .then((response) => {
                console.log(response.data.email);
                console.log(response.data.senha);
                if (response.data.email === email && response.data.senha === senha) {
                    console.log('Entrei aqui');
                    setCliente(response.data);
                    alert(`Você está logado!`);
                }
            }).catch(function () {
                alert("Login ou senha inválidos!");
            });
    }

    const handleSignInButton = (email, senha) => {
        validaCliente(email, senha);
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
            <Button title="Logar" onPress={() => handleSignInButton(email, senha)} />
            <TouchableOpacity onPress={handleSignUpButton}>
                <Text style={styles.text}>Crie sua conta grátis</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignInScreen;