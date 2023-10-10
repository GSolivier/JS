function calcular() {
    event.preventDefault()

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let op = document.getElementById("op").value;
    let result;

    if (isNaN(n1) || isNaN(n2)){
        alert("É necessário um número")
        return
    }

    if (op == '+'){
        result = somar(n1,n2)
    } else if(op == '-'){
        result = subtrair(n1,n2)
    } else if(op == "*") {
        result = multiplicar(n1,n2)
    } else if (op == "/"){
        if(n2 == 0){
            alert("Não se pode dividir nenhum número por 0")
            return
        }
        result = dividir(n1,n2)
    } else if (op == 0) {
        alert('Operação invalida')
    }

    // if (op != 0){
    //     alert(`O resultado é ${result}`)
    // }

    //Inserir o resultado no HTML (DOM)
    document.getElementById('result').innerHTML = result;

    
}

function subtrair(n1, n2){
    return n1 - n2;
}

function somar(n1,n2){
    return n1 + n2;
}

function multiplicar(n1,n2){
    return n1 * n2;
}

function dividir(n1,n2){
    return n1 / n2;
}