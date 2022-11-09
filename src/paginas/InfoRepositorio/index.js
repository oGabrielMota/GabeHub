import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { atualizaRepositorios, deletarRepositorios } from '../../services/requisicoes/repositorios'
import estilos from './estilos';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);


    async function atualiza(){
        const resultado = await atualizaRepositorios(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id
        )

        if (resultado === 'sucesso'){
            Alert.alert("Repositorio alterado com sucesso")
            navigation.goBack()
        }
        else{
            Alert.alert("Erro ao alterar o Repositorio")
            console.log(resultado)
        }
    }

    async function deletar(){
        const resultado = await deletarRepositorios(route.params.item.id)

        if (resultado === 'sucesso'){
            Alert.alert("Repositorio deletado com sucesso")
            navigation.goBack()
        }
        else{
            Alert.alert("Erro ao deletar o Repositorio")
            console.log(resultado)
        } 
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity 
                style={estilos.botao}
                onPress={atualiza}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
                onPress={deletar}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
