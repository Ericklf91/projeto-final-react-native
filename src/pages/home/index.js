import React, { useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import styles from './styles';

const HomeScreen = () => {
    const [destaques, setDestaques] = useState([]);

    useEffect(() => {
        loadDestaques();
    }, []);

    const loadDestaques = () => {
        setDestaques([{
            nome: "Playstation 5",
            descricao: "Teste",
            preco: "50000",
            qtdEstoque: "500"
        }]);
    }

    return (
        <FlatList
            data={destaques}
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
                            <Button
                                buttonStyle={styles.button}
                                title='Ver produto' />
                        </Card>
                    </View>
                );
            }}
        />
    );
}

export default HomeScreen;