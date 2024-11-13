const pessoa = { nome: "Maria", idade: 28 };
const idadeMinimaMaiorIdade = 18;

function verificarMaioridade(idade, idadeMinima) {
    if (typeof idade !== "number" || typeof idadeMinima !== "number") {
        throw new Error("Idade e idade mínima devem ser números.");
    }
    return idade >= idadeMinima;
}
function exibirResultadoMaioridade(pessoa, idadeMinima) {
    try {
        if (typeof pessoa.nome !== "string") {
            throw new Error("O nome da pessoa deve ser uma string.");
        }
        if (typeof pessoa.idade !== "number") {
            throw new Error("A idade da pessoa deve ser um número.");
        }

        const ehMaior = verificarMaioridade(pessoa.idade, idadeMinima);
        const mensagem = ehMaior
            ? `${pessoa.nome} é maior de idade.`
            : `${pessoa.nome} é menor de idade.`;
        console.log(mensagem);
    } catch (erro) {
        console.error("Erro ao exibir o resultado da maioridade:", erro.message);
    }
}
exibirResultadoMaioridade(pessoa, idadeMinimaMaiorIdade);
