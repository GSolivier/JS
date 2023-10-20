const camisaLacoste = {
    descricao: "Camisa Polo",
    preco: 589.97,
    tamanho: "M",
    cor: "Amarela",
    presente: true
}

// let descricao2 = camisaLacoste.descricao + camisaLacoste.preco

// console.log(descricao2)


// Sintaxe destructuring
const {descricao, preco} = camisaLacoste;
const {presente} = camisaLacoste;

console.log(`
    PRODUTO:
        Descrição: ${descricao}
        Preço: ${preco}
        Presente: ${presente ? "Sim" : "Não"}
`)

const evento = {
    dataEvento: new Date(),
    descricaoEvento: "evento de javascript",
    titulo: "programação web",
    presencaEvento: true,
    comentario: "evento top com o edu"
}

const {dataEvento, descricaoEvento, titulo, presencaEvento, comentario} = evento

console.log(`
    Data: ${dataEvento}
    Descrição: ${descricaoEvento}
    Título: ${titulo}
    Presente? ${presencaEvento}
    Comentário: ${comentario}
`)

