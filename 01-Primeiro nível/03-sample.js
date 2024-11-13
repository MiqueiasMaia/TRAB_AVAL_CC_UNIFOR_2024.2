function converterParaData(dataString) {
    const data = new Date(dataString);
    if (isNaN(data)) {
        throw new Error(`Data inválida: ${dataString}`);
    }
    return data;
}

function calcularDiferenca(dataInicial, dataFinal) {
    const data1 = converterParaData(dataInicial);
    const data2 = converterParaData(dataFinal);
    return data2 - data1;
}

const data1 = "2024-01-01";
const data2 = "2024-12-31";

try {
    const resultado = calcularDiferenca(data1, data2);
    console.log(resultado);
} catch (error) {
    console.error("Erro:", error.message);
}