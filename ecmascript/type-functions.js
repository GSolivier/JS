const numeros = [1, 2, 5, 10, 300]

const pessoas = ['Coral', 'Ana', 'Demétrio', 'Vinícius', 'Lacerda', 'Evelyn', 'Luiz']


// Função normal
// Onde ela é chamada e é atribuida um nome a ela
pessoas.forEach(function Carlos(pessoa) {
    console.log(`Bom dia ${pessoa}`)
})

// Função Anônima
// Onde a function é chamada, mas não é atríbuida um nome a ela
pessoas.forEach( function (pessoa) {
    console.log(`Bom dia ${pessoa}`)
})

// Arrow Function
// Utilizando uma seta para definir a função
pessoas.forEach( (pessoa) => {
        console.log(`Bom dia ${pessoa}`)
    }
)

//Variavel recebendo uma função
const dobro = function (x) {
    return x * 2
}
console.log(dobro(2))

// Variavel recebendo uma arrow function
// Atribuindo a uma variável uma arrow function
const triplo = (x) => {
    return x * 3
}
console.log(triplo(10))


//Forma simplificada com o return implicito
const quadruplo = x => x * 4
console.log(quadruplo(10))

//Sem parâmetro
const bomDia = () => "Bom dia"
console.log(bomDia())

