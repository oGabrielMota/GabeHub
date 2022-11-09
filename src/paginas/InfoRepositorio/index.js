import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { buscaRepositorio } from '../../services/requisicoes/repositorios'
import { Linking } from 'react-native';
import estilos from './estilos';

export default function InfoRepositorio({ route, navigation }) {
    const [nome] = useState(route.params.item.name);
    const [repo, setRepo] = useState({})

    useEffect( async ()=> {
        const resultado = await buscaRepositorio(route.params.item.full_name)
        setRepo(resultado)
    },[])


    return (
        <View style={estilos.container}>
            <Text>{repo.nome}</Text>
            <Text>{repo.node_id}</Text>
            <Text>{repo.full_name}</Text>
            <Text>{repo.language}</Text>
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
            />
            <TouchableOpacity 
                style={estilos.botao}
                onPress={() => {Linking.openURL(repo.html_url)}}
            >
                <Text style={estilos.textoBotao}>
                    Abrir repositorio
                </Text>
            </TouchableOpacity>
        </View>
    );
}
