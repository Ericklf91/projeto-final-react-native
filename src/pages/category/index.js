import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dialog, Portal } from 'react-native-paper';
import api from '../../services/api';
import styles from './styles';

const CategoryScreen = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [desc, setDesc] = useState('');

    const [visible, setVisible] = useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = () => {
        const headers = {
            "X-Authorization": "pk_test_30111d23b155b7b570eb490bfbff8f60ede41335fefbe"
        };
        api.get(`/categories`, { headers })
            .then((response) => {
                setCategories(response.data.data);
            }).catch(function (error) {
                alert(error);
            });
    }

    const insertCategories = () => {
        const headers = {
            "X-Authorization": "sk_30111510d2a5c7c20fcb74987aee0ee376f1d911a9118",
            "Content-Type": "application/json"
        };
        const slug = (nome + 1);
        const content = { name: nome, description: desc, slug: slug }
        api.post(`/categories`, content, { headers })
            .then(() => {
                Alert.alert('Categoria criada');
                loadCategories();
                hideDialog();
            }).catch(function (error) {
                alert(error);
            });
    }

    const deleteCategorie = (id) => {
        const headers = {
            "X-Authorization": "sk_30111f852eeb033c9341a70ca0ba06287f5da000050c6"
        };
        api.delete(`/categories/${id}`, { headers })
            .then(() => {
                Alert.alert('Categoria deletada')
                loadCategories();
            });
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
        <View>
            <Button title="Inserir Categoria" onPress={showDialog} />
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Inserir categoria</Dialog.Title>
                    <Dialog.Content>
                        <Input
                            value={nome}
                            onChangeText={(t) => setNome(t)}
                            leftIcon={<Icon
                                name='folder'
                                size={24}
                                color='black'
                            />}
                            label="Nome" placeholder="Nome" />
                        <Input
                            value={desc}
                            onChangeText={(t) => setDesc(t)}
                            leftIcon={<Icon
                                name='file'
                                size={24}
                                color='black'
                            />}
                            label="Descrição" placeholder="Descrição" />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button title="Cancelar" onPress={hideDialog} />
                        <Button title="Enviar" onPress={insertCategories} />
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <FlatList style={styles.list}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <Text style={styles.listItem}>Nome: {item.name}</Text>
                            <Text style={styles.listItem}>Descrição: {item.description}</Text>
                            <Button title="Deletar" onPress={() => deleteCategorie(item.id)} />
                        </View>
                    )
                }}
            />
        </View>
    );
}

export default CategoryScreen;