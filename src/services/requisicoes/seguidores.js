import api from '../api'

export async function pegaSeguidores(login){
    try{
        const resultado =  await api.get(`/users/${login}/followers`)
        console.log(resultado)
        return resultado.data
    }
    catch(erro) {
        console.log(erro)
        return []
    }
}    