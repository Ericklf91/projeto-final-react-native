import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Input, Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dialog, Portal } from 'react-native-paper';
import api from '../../services/api';
import styles from './styles';

const ProductScreen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState('10');
    const [nome, setNome] = useState('');
    const [desc, setDesc] = useState('');
    const [valor, setValor] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [destaque, setDestaque] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [idCat, setIdCat] = useState('');
    const [visibleInsert, setVisibleInsert] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);

    const showDialogInsert = () => setVisibleInsert(true);
    const hideDialogInsert = () => setVisibleInsert(false);
    const showDialogUpdate = () => setVisibleUpdate(true);
    const hideDialogUpdate = () => setVisibleUpdate(false);

    useEffect(() => {
        loadProdutos();
    }, []);

    const loadProdutos = () => {
        const headers = {
            "X-Authorization": "pk_test_30111d23b155b7b570eb490bfbff8f60ede41335fefbe"
        };
        api.get(`/products?limit=${limit}`, { headers })
            .then((response) => {
                setProducts(response.data.data);
            }).catch(function (error) {
                alert(error);
            });
    }

    const insertProducts = () => {
        const headers = {
            "X-Authorization": "sk_30111510d2a5c7c20fcb74987aee0ee376f1d911a9118",
            "Content-Type": "application/json"
        };
        const content = {
            name: nome,
            description: desc,
            price: {
                formatted: "50.00"
            },
            sort_order: 10,
            active: destaque,
            permalink: "Nao tem",
            categories: {
                id: "teste"
            },
            options: {
                assets: {
                    id: "teste"
                }
            }
        }
        api.post(`/products`, content, { headers })
            .then(() => {
                Alert.alert('Produto criado');
                loadProducts();
                hideDialogInsert();
            }).catch(function (error) {
                Alert.alert(error);
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

    renderItem = ({ item }) => (
        <View style={styles.container}>
            <Card>
                <Card.Title>{item.name}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: 'https://blog.br.playstation.com/tachyon/sites/4/2020/11/05_2_Kz_3AA_C.jpeg?resize=1088%2C612&crop_strategy=smart&zoom=1' }}>
                </Card.Image>
                <Text style={styles.text}>
                    Descrição: {item.description}
                </Text>
                <Text style={styles.text}>
                    Preço: {item.price}
                </Text>
                <Text style={styles.text}>
                    Quantidade em Estoque: {item.sort_order}
                </Text>
                <Button
                    buttonStyle={styles.button}
                    title='Adicionar no Carrinho' />
            </Card>
        </View>
    )

    return (
        <View>
            <Button title="Inserir Produto" onPress={showDialogInsert} />
            <Portal>
                <Dialog visible={visibleInsert} onDismiss={hideDialogInsert}>
                    <Dialog.Title>Inserir Produto</Dialog.Title>
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
                    <Dialog.Actions style={styles.dialogButton}>
                        <Button title="Cancelar" onPress={hideDialogInsert} />
                        <Button title="Enviar" onPress={insertProducts} />
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <FlatList style={styles.list}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
}

export default ProductScreen;