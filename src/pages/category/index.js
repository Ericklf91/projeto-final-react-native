import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Button, Alert } from 'react-native';
import { Input, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dialog, Portal } from 'react-native-paper';
import api from '../../services/api';
import styles from './styles';

const CategoryScreen = () => {
    const [categories, setCategories] = useState([]);
    const [idCat, setIdCat] = useState('');
    const [nome, setNome] = useState('');
    const [desc, setDesc] = useState('');
    const [loading, setLoading] = useState(false);
    const [visibleInsert, setVisibleInsert] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);

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
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.nome}</ListItem.Title>
                <ListItem.Subtitle>{item.descricao}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
            <Button title="Atualizar" onPress={() => handleUpdateCategorie(parseInt(item.id))} />
            <Button title="Deletar" onPress={() => deleteCategorie(parseInt(item.id))} />
        </ListItem>
    )

    return (
        <View>
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
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
}

export default CategoryScreen;