const prompt = require('prompt-sync')()

console.log('Valor das vendas é: ', vendas)

function main(){
    const total_vendas = Number(prompt('Total de vendas: '))
    const comissão = Number(prompt('Valor da comissão: '))
    const salario_fixo = 1100
    const salario_comissão = salario_fixo + comissão

    console.log('O valor do salário com comissão é: ', salario_comissão)

}
function vendas(){
    if (vendas <= 5000 ){
        console.log('Sem comissão')
    }else if (5000 < vendas <= 10000){
        console.log('comissão de 0,05 sobre fatia específica')
    }else if (10000 < vendas <= 30000){
        console.log('comissão de 0,1 sobre essa fatia')
    }else ( vendas > 30000)
        console.log('comissão de 0,2 sobre o total de vendas')
    }

main()