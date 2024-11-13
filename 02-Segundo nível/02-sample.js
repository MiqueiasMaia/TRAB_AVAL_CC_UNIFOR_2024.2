const IDADE_MINIMA_PARA_DIRIGIR = 18;
const IDADE_EXEMPLO = 16;

function podeDirigir(idade) {
    if (typeof idade !== "number" || idade < 0) {
        throw new Error("Idade deve ser um número positivo.");
    }
    return idade >= IDADE_MINIMA_PARA_DIRIGIR;
}

function obterMensagemPodeDirigir(podeDirigir) {
    if (podeDirigir) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}

try {
    const resultadoVerificacao = podeDirigir(IDADE_EXEMPLO);
    const mensagem = obterMensagemPodeDirigir(resultadoVerificacao);
    console.log(mensagem);
} catch (error) {
    console.error("Erro:", error.message);
}
