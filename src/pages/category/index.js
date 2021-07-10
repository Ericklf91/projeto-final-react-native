import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';


const CategoryScreen = () => {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadCategorias();
      }, []);

    const loadCategorias = () => {
        setCategorias([{
            nome: "Teste",
            descricao: "Teste"
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
            data={categorias}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
                return (
                    <View>
                        <Text style={styles.listItem}>Nome: {item.nome}</Text>
                        <Text style={styles.listItem}>Descrição: {item.descricao}</Text>
                    </View>
                )
            }}
        />
    );
}

export default CategoryScreen;