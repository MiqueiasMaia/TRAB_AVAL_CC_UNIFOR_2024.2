const nome1 = "João";
const nome2 = "Ana";
const nome3 = "Carlos";

function exibirNome(nome) {
    if (typeof nome !== "string") {
        throw new Error("Nome inválido");
    }
    console.log(nome);
}
function exibirTodosOsNomes() {
    try {
        exibirNome(nome1);
        exibirNome(nome2);
        exibirNome(nome3);
    } catch (erro) {
        console.error("Erro ao exibir nome:", erro.message);
    }
}
exibirTodosOsNomes();