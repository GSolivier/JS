const urlViaCep = `https://viacep.com.br/ws`

function cadastrar(e){
    e.preventDefault();
    alert
}

async function buscarEndereco(cep){
    const resources = `/${cep}/json/`


    try {
        const promise = await fetch(urlViaCep + resources)
        const endereco = await promise.json()
    
        if (endereco.erro) {
            alert("CEP não existe")
            document.getElementById("cep").focus == false
            return
        }
    
        console.log(endereco)
        document.getElementById("endereco").value = endereco.logradouro
        document.getElementById("cidade").value = endereco.localidade
        document.getElementById("estado").value = endereco.uf
        document.getElementById("bairro").value = endereco.bairro
    } catch (error) {
        alert(`CEP não existe. Erro: ${error}`)
    }


}