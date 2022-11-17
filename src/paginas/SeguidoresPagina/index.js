import React, { useEffect, useState } from 'react';
import { buscaUsuario } from '../../services/requisicoes/usuarios'
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView} from 'react-native';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import estilos from './estilos';

export default function SeguidoresPagina({ route, navigation }) {
    const nome = route.params.login
    const [usuario, setUsuario] = useState({});
    console.log(nome)


   useEffect( async ()=> {
      const resultado = await buscaUsuario(nome);
      console.log('SA PORRA É O RESULTADO ' + nome);

        if(resultado){
               setUsuario(resultado)
            }
 }, [])
//     async function busca(){
//     const resultado = await buscaUsuario(nomeUsuario);


    return (
        <ScrollView>
            <View style={estilos.container}>
                    <View style={estilos.fundo} />
                    <View style={estilos.imagemArea}>
                        <Image source={{ uri: usuario.avatar_url }} style={estilos.imagem} />
                    
                    </View>
                    {
                        usuario.name ? <Text style={estilos.textoNome}>{usuario.name}</Text> : <Text style={estilos.semInfo}>{usuario.login}</Text>
                    }


                    {
                        usuario.bio ?  <Text style={estilos.textoBio}>{usuario.bio}</Text> : <Text style={estilos.semInfo}>Usuario sem Biografia :c </Text>
                    }


                    <View style={estilos.areaInfos}>
                        {
                            usuario?.twitter_username &&

                        <TouchableOpacity style={estilos.icones} onPress={() => {Linking.openURL(`https://twitter.com/${usuario.twitter_username}`)}}>
                                <Icon name="twitter" size={30} color="black"/>
                        </TouchableOpacity>
                        }

                        <TouchableOpacity style={estilos.icones} onPress={() => {Linking.openURL(usuario.html_url)}}>
                            <Icon name="github" size={30} color="black"/>
                        </TouchableOpacity>

                    </View>
                    <View style={estilos.areaInfos}>
                        <TouchableOpacity  onPress={() => navigation.navigate(usuario.followers <= 0 ? 'Erro404' : 'Seguidores' , {login: usuario.login})}>
                            <View style={estilos.seguidores}>
                                    <Text style={estilos.seguidoresNumero}>{usuario.followers}</Text>
                                    <Text style={estilos.seguidoresTexto}>Seguidores</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>{usuario.following}</Text>
                            <Text style={estilos.seguidoresTexto}>Seguindo</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Repositorios', {login: nome})}>
                        <Text style={estilos.repositorios}>
                            Ver os repositórios
                        </Text>
                    </TouchableOpacity>

            </View>
        </ScrollView>
    );
}
