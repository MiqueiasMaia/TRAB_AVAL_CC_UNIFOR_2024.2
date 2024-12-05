function filtrarNumerosPares(numeros) {
    if (!Array.isArray(numeros)) {
        throw new Error("O argumento 'numeros' deve ser um array.");
    }
    if (numeros.some(numero => typeof numero !== "number")) {
        throw new Error("Todos os elementos do array devem ser números.");
    }

    const divisorPar = 2;
    return numeros.filter(numero => numero % divisorPar === 0);
}

function gerarNumerosConsecutivos(inicio, fim) {
    if (typeof inicio !== "number" || typeof fim !== "number") {
        throw new Error("Os parâmetros 'inicio' e 'fim' devem ser números.");
    }
    if (inicio > fim) {
        throw new Error("O 'inicio' não pode ser maior que o 'fim'.");
    }

    const numeros = [];
    for (let i = inicio; i <= fim; i++) {
        numeros.push(i);
    }
    return numeros;
}

const INICIO = 1;
const FIM = 6;

try {
    const numerosDeEntrada = gerarNumerosConsecutivos(INICIO, FIM);
    const result = filtrarNumerosPares(numerosDeEntrada);
    console.log(result);
} catch (error) {
    console.error("Erro:", error.message);
}