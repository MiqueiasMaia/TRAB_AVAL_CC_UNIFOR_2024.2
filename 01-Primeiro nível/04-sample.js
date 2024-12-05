const primeiroNumero = 3;
const segundoNumero = 5;

function validarNumero(numero) {
    if (typeof numero !== "number") {
        throw new Error(`${numero} não é um número válido`);
    }
    return numero;
}
function somar(numero1, numero2) {
    return numero1 + numero2;
}
try {
    const numero1Valido = validarNumero(primeiroNumero);
    const numero2Valido = validarNumero(segundoNumero);
    const resultado = somar(numero1Valido, numero2Valido);
    console.log(resultado);
} catch (erro) {
    console.error("Ocorreu um erro:", erro.message);
}