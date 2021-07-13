import React, { useState, useEffect, useCallback } from 'react';
import { RefreshControl, View, FlatList, SafeAreaView } from 'react-native';
import { Card, Button, Text, Image } from 'react-native-elements';
import api from '../../services/api';
import styles from './styles';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const HomeScreen = () => {
    const [destaques, setDestaques] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        loadDestaques();
        wait(1000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        loadDestaques();
    }, []);

    const loadDestaques = () => {
        api.get(`/produtos/destacados`)
            .then((response) => {
                setDestaques(response.data);
            }).catch(function (error) {
                alert(error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title} h4>Itens em Destaque</Text>
            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />}
                data={destaques}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <SafeAreaView style={styles.container}>
                            <Card>
                                <Card.Title>{item.nome}</Card.Title>
                                <Card.Divider />
                                <Image style={styles.img} source={{ uri: `${item.fotoProduto}` }} />
                                <Text style={styles.text}>
                                    Descrição: {item.descricao}
                                </Text>
                                <Text style={styles.text}>
                                    Preço: {item.valor}
                                </Text>
                                <Button
                                    buttonStyle={styles.button}
                                    title='Adicionar ao Carrinho'
                                    onPress={() => addProduto({ item })} />
                                <Card.Divider />
                            </Card>
                        </SafeAreaView>
                    );
                }}
            />
        </View>
    );
}

export default HomeScreen;