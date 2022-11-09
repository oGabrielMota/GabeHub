import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { pegaRepositorios } from '../../services/requisicoes/repositorios'
import estilos from './estilos';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);

    useEffect( async ()=> {
        const resultado = await pegaRepositorios(route.params.login)
        console.log(resultado)
        setRepo(resultado)
    },[])
    

    return (
        <View style={estilos.container}>
                <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
                <TouchableOpacity 
                    style={estilos.botao}
                    onPress={() => navigation.navigate('CriarRepositorio', {id: route.params.id})}
                >
                    <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
                </TouchableOpacity>

        <FlatList  
            data={repo}
            style={{width: '100%', height: '100%'}}
            keyExtractor={repo => repo.id}
            renderItem={({item}) => (
                <TouchableOpacity style={estilos.repositorio} onPress={() => navigation.navigate('InfoRepositorio', {item})}>
                    <Text style={estilos.repositorioNome}>{item.name}</Text>
                    {
                        item?.description ?  <Text style={estilos.repositorioDescricao}>{item.description}</Text> : 
                        <Text style={estilos.semInfo} >Repositorio sem descrição :c </Text>
                    }
                </TouchableOpacity>
            )}
        
        />
        </View>
    );
}
