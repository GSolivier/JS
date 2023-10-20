// Criar uma desestruturação para um objeto filmes
// trazer somente 3 propriedades

const filmes = [
    {
        titulo: "Hora do Rush 2",
        genero: ["Ação", "Aventura"],
        produtora: "Universal Pictures",
        duracao: "1h43",
        indicacao: "L",
        ondeAssistir: "Cinema",
        dataLancamento: "13/10/2012"
    },
    {
        titulo: "Coraline",
        genero: ["Animação", "Terror"],
        produtora: "Neil Gaiman",
        duracao: "1h23",
        indicacao: "L",
        ondeAssistir: "Netflix",
        dataLancamento: "04/08/2011"
    },
    {
        titulo: "The Day of the Doctor",
        genero: ["Ficção Cientifica", "Viajem no Tempo"],
        produtora: "BBC",
        duracao: "1h35",
        indicacao: "14A",
        ondeAssistir: "DisneyPlus",
        dataLancamento: "13/08/2013"
    }
]

const {titulo, duracao, genero} = filmes

filmes.forEach((f) => {
    console.log(`
    Filme: ${f.titulo}
    Duração: ${f.duracao}
    Genero: ${f.genero}
    `)
})


