import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text, Button } from 'react-native-elements';
import styles from './styles';


const SignUpScreen = () => {
    const navigation = useNavigation();

    const handleSignInButton = () => {
        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>
            <Text h4 style={styles.text}>Formulário de cadastro</Text>
            <Input style={styles.textInput} leftIcon={<Icon
                name='user'
                size={24}
                color='black'
            />}
                label="Nome" placeholder="Nome" />
            <Input style={styles.textInput} leftIcon={<Icon
                name='envelope'
                size={24}
                color='black'
            />}
                label="E-mail" placeholder="E-mail" />
            <Input style={styles.textInput} leftIcon={<Icon
                name='lock'
                size={24}
                color='black'
            />}
                label="Senha" placeholder="Password" secureTextEntry={true} />
            <Button
                title="Criar conta"
            />
            <TouchableOpacity onPress={handleSignInButton}>
                <Text style={styles.text}>Voltar ao login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignUpScreen;