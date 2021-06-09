const prompt = require('prompt-sync')()

console.log('Valor do consumo é: ', consumo)
console.log('Valor da iluminação é: ', iluminaçao)

function main(){
    const consumo_kwh = Number(prompt('Valor do consumo (kwh): kwh '))
    const iluminaçaõ = Number(prompt('Valor da iluminação: R$ '))
    const valor_faturado = Number(prompt('Valor faturado: R$'))
    const icms = Number(prompt('Valor dp icms: '))
    const pis_confis = Number(prompt('Valord o pis/confis: '))
    const valor_tarifado = (0,15 * icms)
    const valor_tarifado_2 = (0,25 * pis_confis)
    const leitura_atual = Number(prompt('Valor da leitura atual: '))
    const leitura_anterior = Number(prompt('Valor da leitura anterior: '))

    const valor_total = consumo_kwh + iluminaçaõ + valor_faturado + valor_tarifado + valor_tarifado_2
    console.log('Valor total é: ', valor_total)
    console.log('O valor da leitura atual é: ', leitura_atual)
    console.log('O valor da leitura anterior é: ', leitura_anterior)

}
function consumo(){
    if (consumo <= 30){
        console.log('Insento de tarifa')
    }else if (consumo <= 100){
        console.log('cobrado 0,59 por cada um')
    }else if (consumo > 100){
        console.log('cobrado 0,75 por cada um')
    }
    function iluminaçao(){
        if (iluminação > 80){
            console.log('É cobrado e tem custo de 0,06 do valor tarifado')
        }
        
    }
}
main()