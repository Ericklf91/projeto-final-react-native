import React, { useState } from 'react';
import { TouchableOpacity, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text, Button } from 'react-native-elements';
import api from '../../services/api';
import styles from './styles';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSignInButton = () => {
        navigation.navigate("Login");
    }

    const insertCustomer = () => {
        const headers = {
            "X-Authorization": "sk_30111510d2a5c7c20fcb74987aee0ee376f1d911a9118",
            "Content-Type": "application/json"
        };
        const content = { email: email, firstname: nome, external_id: senha, lastname: "User" }
        api.post(`/customers`, content, { headers })
            .then(() => {
                Alert.alert('Cliente criado');
                handleSignInButton();
            }).catch(function (error) {
                alert(error);
            });
    }

    return (
        <View style={styles.container}>
            <Text h4 style={styles.text}>Formulário de cadastro</Text>
            <Input value={nome}
                onChangeText={t => setNome(t)}
                style={styles.textInput} leftIcon={<Icon
                    name='user'
                    size={24}
                    color='black'
                />}
                label="Nome" placeholder="Nome" />
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
            <Button title="Criar conta" onPress={insertCustomer}/>
            <TouchableOpacity onPress={handleSignInButton}>
                <Text style={styles.text}>Voltar ao login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignUpScreen;