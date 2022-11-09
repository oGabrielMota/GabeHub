import axios from 'axios'


// const api = axios.create({
//     baseURL: 'http://192.168.1.102:3000'
// })

const api = axios.create({
    baseURL: 'https://api.github.com/users'
})

export default api