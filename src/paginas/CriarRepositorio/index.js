import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { novoRepositorios } from '../../services/requisicoes/repositorios'
import estilos from './estilos';

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    async function novo(){
        const resultado = await novoRepositorios(
            route.params.id,
            nome,
            data,
        )

        if (resultado === 'sucesso'){
            Alert.alert("Repositorio criado com sucesso")
            navigation.goBack()
        }
        else{
            Alert.alert("Erro ao criar o Repositorio")
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
            <TouchableOpacity style={estilos.botao} onPress={novo}>
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
