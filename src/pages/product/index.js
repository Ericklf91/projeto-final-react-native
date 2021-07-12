import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { Input, Card, Button, Switch, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dialog, Portal } from 'react-native-paper';
import api from '../../services/api';
import styles from './styles';

const ProductScreen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState('10');
    const [id, setId] = useState('');
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
        loadProducts();
    }, []);

    const handleUpdateProduct = (id) => {
        showDialogUpdate();
        setId(id);
    }

    const loadProducts = () => {
        api.get(`/produtos`)
            .then((response) => {
                setProducts(response.data);
            }).catch(function (error) {
                alert(error);
            });
    }

    const insertProducts = () => {
        const content = {
            nome: nome,
            descricao: desc,
            valor: valor,
            quantidade: quantidade,
            destacado: destaque,
            fotoProduto: imgUrl,
            id_categoria: idCat
        };
        api.post(`/produtos`, content)
            .then(() => {
                Alert.alert('Produto criado');
                loadProducts();
                hideDialogInsert();
            }).catch(function (error) {
                Alert.alert(error);
            });
    }

    const updateProduct = (id) => {
        const content = {
            nome: nome,
            descricao: desc,
            valor: valor,
            quantidade: quantidade,
            destacado: destaque,
            fotoProduto: imgUrl,
            id_categoria: idCat
        }
        api.put(`/produtos/${id}`, content)
            .then(() => {
                Alert.alert('Produto atualizado');
                loadProducts();
                hideDialogUpdate();
            }).catch(function (error) {
                alert(error);
            });
    }

    const deleteProduct = (id) => {
        console.log(id);
        api.delete(`/produtos/${id}`)
            .then(() => {
                Alert.alert('Produto deletado')
                loadProducts();
            }).catch(function (error) {
                alert(error);
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
                <Card.Title>{item.nome}</Card.Title>
                <Card.Divider />
                <Image style={styles.img} source={{ uri: `${item.fotoProduto}` }} />
                <Text style={styles.text}>
                    Descrição: {item.descricao}
                </Text>
                <Text style={styles.text}>
                    Preço: {item.valor}
                </Text>
                <Text style={styles.text}>
                    Quantidade em Estoque: {item.quantidade}
                </Text>
                <Button
                    buttonStyle={styles.button}
                    title='Adicionar no Carrinho' />
            </Card>
            <Button title="Atualizar" onPress={() => handleUpdateProduct(parseInt(item.id))} />
            <Button title="Deletar" onPress={() => deleteProduct(parseInt(item.id))} />
        </View>
    )

    return (
        <View>
            <Button title="Inserir Produto" onPress={showDialogInsert} />
            <Portal>
                <Dialog visible={visibleInsert} onDismiss={hideDialogInsert}>
                    <ScrollView>
                        <Dialog.Title>Inserir Produto</Dialog.Title>
                        <Dialog.Content>
                            <Input
                                value={nome}
                                onChangeText={(t) => setNome(t)}
                                leftIcon={<Icon
                                    name='cubes'
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
                            <Input
                                value={valor}
                                onChangeText={(t) => setValor(t)}
                                leftIcon={<Icon
                                    name='money'
                                    size={24}
                                    color='black'
                                />}
                                label="Preço" placeholder="Preço" />
                            <Input
                                value={quantidade}
                                onChangeText={(t) => setQuantidade(t)}
                                leftIcon={<Icon
                                    name='sort-amount-asc'
                                    size={24}
                                    color='black'
                                />}
                                label="Quantidade" placeholder="Quantidade" />
                            <Input
                                value={imgUrl}
                                onChangeText={(t) => setImgUrl(t)}
                                leftIcon={<Icon
                                    name='image'
                                    size={24}
                                    color='black'
                                />}
                                label="Imagem" placeholder="Url da Imagem" />
                            <Input
                                value={idCat}
                                onChangeText={(t) => setIdCat(t)}
                                leftIcon={<Icon
                                    name='dropbox'
                                    size={24}
                                    color='black'
                                />}
                                label="Categoria" placeholder="Categoria do produto" />
                            <Text>Exibir na home page?<Switch value={destaque} onChange={(t) => setDestaque(!destaque)} /></Text>
                        </Dialog.Content>
                        <Dialog.Actions style={styles.dialogButton}>
                            <Button title="Cancelar" onPress={hideDialogInsert} />
                            <Button title="Enviar" onPress={insertProducts} />
                        </Dialog.Actions>
                    </ScrollView>
                </Dialog>
            </Portal>
            <Portal>
                <Dialog visible={visibleUpdate} onDismiss={hideDialogUpdate}>
                    <ScrollView>
                        <Dialog.Title>Atualizar produto</Dialog.Title>
                        <Dialog.Content>
                            <Input
                                value={nome}
                                onChangeText={(t) => setNome(t)}
                                leftIcon={<Icon
                                    name='cubes'
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
                            <Input
                                value={valor}
                                onChangeText={(t) => setValor(t)}
                                leftIcon={<Icon
                                    name='money'
                                    size={24}
                                    color='black'
                                />}
                                label="Preço" placeholder="Preço" />
                            <Input
                                value={quantidade}
                                onChangeText={(t) => setQuantidade(t)}
                                leftIcon={<Icon
                                    name='sort-amount-asc'
                                    size={24}
                                    color='black'
                                />}
                                label="Quantidade" placeholder="Quantidade" />
                            <Input
                                value={imgUrl}
                                onChangeText={(t) => setImgUrl(t)}
                                leftIcon={<Icon
                                    name='image'
                                    size={24}
                                    color='black'
                                />}
                                label="Imagem" placeholder="Url da Imagem" />
                            <Input
                                value={idCat}
                                onChangeText={(t) => setIdCat(t)}
                                leftIcon={<Icon
                                    name='dropbox'
                                    size={24}
                                    color='black'
                                />}
                                label="Categoria" placeholder="Categoria do produto" />
                            <Text>Exibir na home page?<Switch value={destaque} onChange={(t) => setDestaque(!destaque)} /></Text>
                        </Dialog.Content>
                        <Dialog.Actions style={styles.dialogButton}>
                            <Button title="Cancelar" onPress={hideDialogUpdate} />
                            <Button title="Enviar" onPress={() => updateProduct(id)} />
                        </Dialog.Actions>
                    </ScrollView>
                </Dialog>
            </Portal>
            <FlatList style={styles.list}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                data={products}
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
            />
        </View>
    );
}

export default ProductScreen;