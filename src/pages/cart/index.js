import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Button, View, SafeAreaView, FlatList, Text } from 'react-native';
import { Input } from 'react-native-elements';
import CarrinhoContext from '../../context/CarrinhoContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dialog, Portal } from 'react-native-paper';
import styles from './styles';

const CartScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [visible, setVisible] = useState(false);
    const context = useContext(CarrinhoContext);
    const valorTotal = context.produtos.reduce((total, prod) => total + prod.item.valor, 0).toFixed(2);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const handleCheckoutButton = () => {
        alert("Login efetuado!");
        navigation.navigate("Checkout");
        hideDialog();
    }

    const handleSignInButton = () => {
        showDialog();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title style={styles.title}>Faça o Login</Dialog.Title>
                    <Dialog.Content>
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
                        <Button title="Logar" onPress={() => handleCheckoutButton()} />
                    </Dialog.Content>
                </Dialog>
            </Portal>
            <Text style={styles.title} >Itens no Carrinho</Text>
            <FlatList
                data={context.produtos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.rowcontainer}>
                            <Text style={styles.text}>Id: {item.item.id}</Text>
                            <Text style={styles.text}>Nome: {item.item.nome}</Text>
                            <Text style={styles.text}>Valor: {item.item.valor}</Text>
                        </View>
                    )
                }}
            />
            <View>
                <Text style={styles.title}>Total: {valorTotal}</Text>
                <Button title="Finalizar Pedido" onPress={handleSignInButton} />
            </View>
        </SafeAreaView>
    );
};

export default CartScreen;