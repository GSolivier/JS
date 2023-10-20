// const numeros = [1, 2, 5, 10, 300]

// Retorna um array modificado
// Dependendo da abordagem
// const arrDobro = numeros.map(n => n * 2)

// console.log(numeros)
// console.log(arrDobro)

// crie 2 arrays nomes e sobrenomes
// crie um terceiro array de nomesCompleto
// ao final exiba os nomes completos no console com o foreach

//utiliza arrow functions como callback functions

const nomes = ['Guilherme', 'Andre', 'Luiz', 'Everton']
const sobrenomes = ['Sousa', 'Brizido', 'Correa', 'Araujo']

const nomesCompleto = nomes.map((nome, i) => {
    return `${nome} ${sobrenomes[i]}`
})

nomesCompleto.forEach((nc) => {
    console.log(nc)
})


