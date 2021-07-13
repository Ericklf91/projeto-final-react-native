import React, { useContext } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import CarrinhoContext from '../../context/CarrinhoContext';
import styles from './styles';

const CartScreen = () => {
    const context = useContext(CarrinhoContext);
    console.log(context.produtos);

    const valorTotal = context.produtos.reduce((total, prod) => total + prod.item.valor, 0).toFixed(2);

    return (
        <SafeAreaView style={styles.container}>
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
            </View>
        </SafeAreaView>
    );
};

export default CartScreen;