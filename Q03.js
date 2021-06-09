const prompt = require('prompt-sync')()

function main(){
    const avaliaçao_1 = Number(prompt('valor da primeira avaliação: '))
    const avaliação_2 = Number(prompt('Valor da segunda avaliação: '))
    const avaliaçao_3 = Number(prompt('Valor da terceira avaliação: '))
    const peso_1 = Number(prompt('Valor do peso 1: 10% '))
    const peso_2 = Number(prompt('Valor do peso 2: 20% '))
    const peso_3 = Number(prompt('Valor do peso 3: 30%'))

    const notas = (avaliaçao_1 * peso_2) + (avaliação_2 * peso_3) + (avaliaçao_3 * peso_1)
    const pesos = peso_1 + peso_2 + peso_3
    const media_ponderada = notas/pesos

    console.log('A média ponderada é: ', media_ponderada)
}
function media_semestral(){
    const media_semestral = Number(prompt('Valor da média semestral: '))
    console.log('Valor da media semestral: ', media_semestral)

    if (media_semestral = 7){
        console.log('Aprovado')
    }else if (media_semestral < 4){
        console.log('Reprovado direto')
    }else if (4 < media_semestral < 7){
        console.log('Vai para prova final')
    }
    function media(){
        const prova_final = Number(prompt('Valor da prova final: '))
        const media = (prova_final + media_semestral) / 2
        
        if (media >= 6){
            console.log('Aprovado')
        }else{
            console.log('Reprovado')
        }
        console.log('O valor da média é: ', media)

    }
}
main()