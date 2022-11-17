import { useEffect, useState} from 'react';
import { pegaSeguidores } from '../../services/requisicoes/seguidores'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import estilos from './estilos';


export default function Seguidores({ route, navigation}){
    const nome = route.params.login

    const [seguidores, setSeguidores] = useState([]);

    useEffect( async ()=> {
        const resultado = await pegaSeguidores(nome)
        setSeguidores(resultado)
    },[])

    return(
        <View style={estilos.container} >
            <Text>Você esta nos seguidores de {nome} </Text>

            <FlatList  
            data={seguidores}
            style={{width: '100%', height: '100%'}}
            numColumns={3}
            keyExtractor={seguidores => seguidores.id}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Principal', item.login)}>
                    <View style={estilos.imagemArea}>
                        <Image source={{ uri: item.avatar_url }} style={estilos.imagem} />
                        <Text style={{marginTop: 5}}>{item.login}</Text>
                    </View>
                </TouchableOpacity>
            )}
        
        />
        </View>
    )
}