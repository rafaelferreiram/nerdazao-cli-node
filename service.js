const axios = require('axios')
const URL = 'http://swapi.co/api/people'

async function pegarPersonagem(nome){
    const url = `${URL}/?search=${nome}&format=json`
    const result = await axios.get(url)
    return result.data
}

module.exports = {
    pegarPersonagem
}