import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Card, Button } from 'react-native-elements';
import styles from './styles';

const ProductScreen = () => {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadProdutos();
      }, []);

    const loadProdutos = () => {
        setProdutos([{
            nome: "Playstation 5",
            descricao: "Teste",
            preco: "50000",
            qtdEstoque: "500"
        }]);
    }

    const renderFooter = () => {
        return (
            <View style={styles.view}>
                {loading &&
                    <ActivityIndicator size="large" color="#00FF7F" />
                }
            </View>
        );
    }

    return (
        <FlatList style={styles.list}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
            data={produtos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
                return (
                    <View style={styles.container}>
                        <Card>
                            <Card.Title>{item.nome}</Card.Title>
                            <Card.Divider />
                            <Card.Image source={{ uri: 'https://blog.br.playstation.com/tachyon/sites/4/2020/11/05_2_Kz_3AA_C.jpeg?resize=1088%2C612&crop_strategy=smart&zoom=1' }}>
                            </Card.Image>
                            <Text style={styles.text}>
                                Descrição: {item.descricao}
                            </Text>
                            <Text style={styles.text}>
                                Preço: {item.preco}
                            </Text>
                            <Text style={styles.text}>
                                Quantidade em Estoque: {item.qtdEstoque}
                            </Text>
                            <Button
                                buttonStyle={styles.button}
                                title='Adicionar no Carrinho' />
                        </Card>
                    </View>
                )
            }}
        />
    );
}

export default ProductScreen;