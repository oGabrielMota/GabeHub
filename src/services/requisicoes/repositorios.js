import api from '../api'

export async function pegaRepositorios(id){
    try{
        const resultado =  await api.get(`/repos?postId=${id}`)
        return resultado.data
    }
    catch(erro) {
        console.log(erro)
        return []
    }
}

export async function atualizaRepositorios(postId, nome, data, id){
    try{
      await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId,
            id: id
        })
        return 'sucesso'
    }
    catch(error) {
        console.log(error)
        return 'erro'
    }
}

export async function novoRepositorios(postId, nome, data){
    try{
      await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId
})
        return 'sucesso'
    }
    catch(error) {
        console.log(error)
        return 'erro'
    }
}

export async function deletarRepositorios(id){
    try{
      await api.delete(`/repos/${id}`)
        return 'sucesso'
    }
    catch(error) {
        console.log(error)
        return 'erro'
    }
}