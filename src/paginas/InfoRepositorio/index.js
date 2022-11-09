import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { buscaRepositorio } from '../../services/requisicoes/repositorios'
import { Linking } from 'react-native';
import estilos from './estilos';


const dataFormatada = (ms) => {
    const data = new Date(ms)
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear('YY') 
  
      return `${dia}/${mes}/${ano}`
 }

export default function InfoRepositorio({ route, navigation }) {
    const [criadoEm] = useState(route.params.item.created_at);
    const [ultimaAtualizacao] = useState(route.params.item.updated_at);
    const [repo, setRepo] = useState({})

    useEffect( async ()=> {
        const resultado = await buscaRepositorio(route.params.item.full_name)
        setRepo(resultado)
    },[])




    return (
        <View style={estilos.container}>
            <View style={estilos.nomeDescricao}>
                <Text style={estilos.nome} >{repo.name}</Text>
                <Text style={estilos.descrição} >Descrição (se tiver) {repo.description}</Text>
            </View>
            <View  style={estilos.datas}>
                <Text style={estilos.textoNumeros}>Criado em</Text>
                <Text style={estilos.numeros}>{dataFormatada(criadoEm)}</Text>
            </View>
            <View  style={estilos.datas}>
            <Text style={estilos.textoNumeros}>Ultima atualização</Text>
                <Text  style={estilos.numeros}>{dataFormatada(ultimaAtualizacao)}</Text>
            </View>
            <Text>Linguagem ( todas se possivel ) {repo.language}</Text>
            <Text>Linguagem ( todas se possivel ) {repo.languages_url}</Text>
            <Text>---------------------------</Text>






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
