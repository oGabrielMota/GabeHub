import { StyleSheet } from 'react-native';


const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        backgroundColor: '#8A07DA',
        marginTop: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
    },
    textoBotao: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    entrada: {
        borderWidth: 2,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginTop: 20,
        borderRadius: 8,
        height: 44,
        width: '90%',
    },
    nomeDescricao: {
        paddingBottom: 25,
        paddingTop: 55,
    },
    descrição: {
        fontSize: 15,
        alignItems: 'center',
        fontWeight: '600',
        color: '#45565F',
        ustifyContent: 'center',
        textAlign: 'center',
    },
    nome: {
        fontSize: 35,
        fontWeight: '600',
        color: '#45565F',
        justifyContent: 'center',
        textAlign: 'center',
    },
    datas: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 25
    },
    numeros: {
        marginRight: 10,
        marginLeft: 10,
        color: '#8A07DA',
        fontSize: 15,
    },
    textoNumeros: {
        color: '#95A8B2',
        fontSize: 13,
        marginTop: 5,
    }
});

export default estilos;