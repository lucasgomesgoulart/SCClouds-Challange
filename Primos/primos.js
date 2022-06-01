let labelResposta = document.getElementById('resposta')

function numerosPrimos() {
    numeroUser = document.getElementById('inputNumero').value

    let numeros = []
    for (var i = 0; i <= numeroUser; i++) {
        if (verificaPrimo(i)) {
            numeros.push(i);
        }
    }
    labelResposta.innerHTML = `Os numeros primos até o ${numeroUser} são: ${numeros}`
    return numeros;

}

function verificaPrimo(numeroUser) {
    for (let i = 2; i < numeroUser; i++)
        if (numeroUser % i === 0) {
            return false
        };
    return numeroUser > 1;
}
