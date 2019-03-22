const commander = require('commander')
const Personagem = require('./model/Personagem')
const service = require('./service')

async function main(){
    commander.version('V-1.0')
    .option('-n --nome [value]',"Nome do Personagem do Star Wars")
    .option('-b --buscar',"Buscar informação do personagem")
    .parse(process.argv)

    const personagem = new Personagem(commander)

    try {
        if(commander.buscar){
            console.log(`Personagem ${personagem.nome.toUpperCase()} informado para busca`)
            const result = await service.pegarPersonagem(personagem.nome)
            console.log(result)
        }
    } catch (error) {
        console.error('Deu erro aqui !' ,error)
    }
}
main()