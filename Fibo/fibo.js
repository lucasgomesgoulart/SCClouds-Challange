let labelResposta = document.getElementById('resposta')
let resposta, termo, numero

function fibo() {
    let numeroUser = parseInt(document.getElementById('inputNumero').value)
    let primeiroNumero = 1
    let segundoNumero = 1

    if (numeroUser > 0) {
        if (numeroUser == 1) {
            termo = 1
        } else if (numeroUser == 2) {
            termo = 1
        } else {
            for (i = 3; i <= numeroUser; i++) {
                numero = primeiroNumero + segundoNumero
                // console.log("1", primeiroNumero)
                // console.log("2", segundoNumero)
                // console.log("numero", numero)
                primeiroNumero = segundoNumero
                segundoNumero = numero
                // console.log(numero);
                termo = numero
            }
        }
        labelResposta.innerHTML = `O termo da sequencia é: ${termo}`
    } else {
        alert("Insira um numero maior que 0")
    }
}