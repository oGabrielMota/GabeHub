import api from '../api'

export async function buscaUsuario(nomeUsuario){
    try{
        const resultado =  await api.get(`/${nomeUsuario}`)
        return resultado.data
    }
    catch(erro) {
        console.log(erro)
        return {}
    }
}