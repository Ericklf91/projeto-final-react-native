import React, { useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { Card, Button, Text, Image } from 'react-native-elements';
import api from '../../services/api';
import styles from './styles';

const HomeScreen = () => {
    const [destaques, setDestaques] = useState([]);

    useEffect(() => {
        loadDestaques();
    }, []);

    const handleMostrar = () => {
        loadDestaques();
    }

    const loadDestaques = () => {
        api.get(`/produtos/destacados`)
            .then((response) => {
                setDestaques(response.data);
            }).catch(function (error) {
                alert(error);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} h4>Itens em Destaque</Text>
            <FlatList
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
                                    title='Ver produto' />
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