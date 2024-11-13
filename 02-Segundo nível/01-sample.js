const precoInicial = 100;
const percentualDesconto = 0.15;

function validarNumeroPositivo(numero, nome) {
    if (typeof numero !== "number" || numero <= 0) {
        throw new Error(`${nome} deve ser um número positivo.`);
    }
}

// Função para validar se o percentual de desconto é válido
function validarPercentualDesconto(percentualDesconto) {
    if (typeof percentualDesconto !== "number" || percentualDesconto <= 0 || percentualDesconto > 1) {
        throw new Error("O percentual de desconto deve ser um número entre 0 e 1.");
    }
}
function calcularDescontoValor(preco, percentualDesconto) {
    validarNumeroPositivo(preco, "O preço");
    validarPercentualDesconto(percentualDesconto);
    return preco * percentualDesconto;
}
function aplicarDesconto(preco, desconto) {
    validarNumeroPositivo(preco, "O preço");
    if (typeof desconto !== "number" || desconto < 0) {
        throw new Error("O desconto deve ser um número não negativo.");
    }
    return preco - desconto;
}

try {
    const desconto = calcularDescontoValor(precoInicial, percentualDesconto);
    const precoFinal = aplicarDesconto(precoInicial, desconto);

    console.log(`Preço com desconto: ${precoFinal}`);
} catch (error) {
    console.error("Erro:", error.message);
}

