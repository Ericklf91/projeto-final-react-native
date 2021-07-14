import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, ScrollView, View, FlatList, ActivityIndicator, Button, Alert, Image, TouchableOpacityBase } from 'react-native';
import { Card, Input, ListItem, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dialog, Portal } from 'react-native-paper';
import CarrinhoContext from '../../context/CarrinhoContext';
import api from '../../services/api';
import styles from './styles';

const CategoryScreen = () => {
    const [products, setProducts] = useState('');
    const [categories, setCategories] = useState([]);
    const [idCat, setIdCat] = useState('');
    const [nome, setNome] = useState('');
    const [desc, setDesc] = useState('');
    const [loading, setLoading] = useState(false);
    const [visibleList, setVisibleList] = useState(false);
    const [visibleInsert, setVisibleInsert] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);
    const { addProduto } = useContext(CarrinhoContext);

    const showDialogList = () => setVisibleList(true);
    const hideDialogList = () => setVisibleList(false);
    const showDialogInsert = () => setVisibleInsert(true);
    const hideDialogInsert = () => setVisibleInsert(false);
    const showDialogUpdate = () => setVisibleUpdate(true);
    const hideDialogUpdate = () => setVisibleUpdate(false);

    useEffect(() => {
        loadCategories();
    }, []);

    const handleUpdateCategorie = (id) => {
        showDialogUpdate();
        setIdCat(id);
    }

    const listProducts = (id) => {
        api.get(`/categorias/produtos/${id}`)
            .then((response) => {
                setProducts(response.data);
                showDialogList();
            }).catch(function (error) {
                alert(error);
            });
    }

    const loadCategories = () => {
        api.get(`/categorias`)
            .then((response) => {
                setCategories(response.data);
            }).catch(function (error) {
                alert(error);
            });
    }

    const insertCategories = () => {
        const content = { nome: nome, descricao: desc }
        api.post(`/categorias`, content)
            .then(() => {
                Alert.alert('Categoria criada');
                loadCategories();
                hideDialogInsert();
            }).catch(function (error) {
                alert(error);
            });
    }

    const updateCategorie = (id) => {
        const content = { nome: nome, descricao: desc }
        api.put(`/categorias/${id}`, content)
            .then(() => {
                Alert.alert('Categoria atualizada');
                loadCategories();
            }).catch(function (error) {
                alert(error);
            });
    }

    const deleteCategorie = (id) => {
        api.delete(`/categorias/${id}`)
            .then(() => {
                Alert.alert('Categoria deletada')
                loadCategories();
            }).catch(function (error) {
                alert('Retire os produtos da categoria antes de deletá-la', error);
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
        <>
            {!visibleList &&
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{item.nome}</ListItem.Title>
                        <ListItem.Subtitle>{item.descricao}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron size={30} onPress={() => listProducts(item.id)} />
                    <Button title="Atualizar" onPress={() => handleUpdateCategorie(parseInt(item.id))} />
                    <Button title="Deletar" onPress={() => deleteCategorie(parseInt(item.id))} />
                </ListItem>
            }
        </>
    )

    renderProduto = ({ item }) => (
        <>
            {visibleList &&
                <ScrollView>
                    <Card style={styles.container}>
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
                            title='Adicionar no Carrinho'
                            onPress={() => addProduto({ item })} />
                    </Card>
                </ScrollView>
            }
        </>
    );

    return (
        <View style={styles.body}>
            <Button title="Inserir Categoria" onPress={showDialogInsert} />
            <Portal>
                <Dialog visible={visibleInsert} onDismiss={hideDialogInsert}>
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
                    <Dialog.Actions style={styles.dialogButton}>
                        <Button title="Cancelar" onPress={hideDialogInsert} />
                        <Button title="Enviar" onPress={insertCategories} />
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <Portal>
                <Dialog visible={visibleUpdate} onDismiss={hideDialogUpdate}>
                    <Dialog.Title>Atualizar categoria</Dialog.Title>
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
                        <Button title="Cancelar" onPress={hideDialogUpdate} />
                        <Button title="Enviar" onPress={() => updateCategorie(idCat)} />
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <FlatList style={styles.list}
                ListFooterComponent={renderFooter}
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
            {visibleList &&
                <>
                    <TouchableOpacity onPress={() => setVisibleList(false)}><Text>Voltar</Text></TouchableOpacity>
                    <Text style={styles.title} h4>Produtos da Categoria</Text>
                </>
            }
            <FlatList style={styles.list}
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderProduto}
            />
        </View>
    );
}

export default CategoryScreen;