const prompt = require('prompt-sync')()
console.log('O valor da variação é: ', variaçao)

function main(){
    const media_casos_14_dias = Number(prompt('Valor da média de casos há 14 dias: '))
    const media_casos_hoje = Number(prompt('Valor da média de casos hoje: '))

    console.log('O valor da m´deia de casos há 14 dias é: ', media_casos_14_dias)
    console.log('O valor da média de casos hoje é: ', media_casos_hoje)

}
function variaçao(){
    const variaçao = Number(prompt('Variaçao: '))


    if (variaçao < 0,15){
        console.log('Está estável')

    }else if (variaçao > 0,15){
        console.log('Está em alta')
    }else{
        console.log('Está em queda')
    }


    }
main()