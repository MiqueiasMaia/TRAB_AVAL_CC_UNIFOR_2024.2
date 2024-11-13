const CUSTO_POR_KM = 10; 
const DISTANCIA_EXEMPLO = 50; 

function calcularFrete(distancia) {
    if (typeof distancia !== "number" || distancia <= 0) {
        throw new Error("A distância deve ser um número positivo.");
    }
    return distancia * CUSTO_POR_KM;
}

function exibirValorFrete(frete) {
    if (typeof frete !== "number" || frete < 0) {
        throw new Error("O valor do frete deve ser um número positivo.");
    }
    console.log(`O valor do frete é: ${frete}`);
}

try {
    const frete = calcularFrete(DISTANCIA_EXEMPLO);
    exibirValorFrete(frete);
} catch (error) {
    console.error("Erro:", error.message);
}
