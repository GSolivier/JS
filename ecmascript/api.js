const url = "https://viacep.com.br/ws/09960740/json/"
 
//get
// fetch(url)
// .then( (resposta) => {
//     //Objeto promise resolvido (headers, body, whatever)
//     return resposta.json()
// } )
// .then( (dados) => {
//     console.log(`
//     Endereço: ${dados.logradouro}
//     Cidade: ${dados.localidade}
//     Estado: ${dados.uf}
//     `)
// } )
// .catch((e) => {
//     console.log(`Deu ruim! Erro: ${e}`);
// })

async function chamarApi(endereco){

    try {

        const promise = await fetch(endereco)
        const dados = await promise.json()
        console.log(dados)

    } catch (error) {

        console.log("Deu ruim na API")
        
    }
}

chamarApi(url)