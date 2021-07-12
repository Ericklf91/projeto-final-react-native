import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text, Button } from 'react-native-elements';
import api from '../../services/api';
import styles from './styles';

const SignInScreen = () => {
    const navigation = useNavigation();
    const [customers, setCustomers] = useState([]);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    const handleSignInButton = () => {
        loadCustomers();
        customers.map(customer => {
            if (customer.email === email && customer.external_id === senha) {
                alert('Bem vindo ', `${customer.firstname}`);
                setIsLogged(true);
            }
            alert('Falha ao realizar login! Email ou senha inválidos');
        });
    }
    
    const handleMostrar = () => {
        loadCustomers();
        setMostrar(false)
    }

    const loadCustomers = () => {
        const headers = {
            "X-Authorization": "sk_30111510d2a5c7c20fcb74987aee0ee376f1d911a9118"
        };
        api.get(`/customers`, { headers })
            .then((response) => {

                for (var i = 0; i < response.data.data.length; i++) {
                    if (response.data.data[i].email == email) {
                      console.log(response.data.data[i])
                      setCustomers(response.data.data[i]);
                      console.log(customers);
                    }
                  }
                //setCustomers(response.data.data);
            }).catch(function (error) {
                alert(error);
            });
    }

    const handleSignUpButton = () => {
        navigation.navigate("Cadastro");
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