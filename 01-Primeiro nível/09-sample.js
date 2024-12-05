class Gestor {
    constructor(nome, idade) {
        if (typeof nome !== "string" || nome.trim() === "") {
            throw new Error("O nome do gestor deve ser uma string válida.");
        }
        if (typeof idade !== "number" || idade <= 0) {
            throw new Error("A idade do gestor deve ser um número positivo.");
        }

        this.nome = nome;
        this.idade = idade;
    }
}
const idadeGestor = 40;

function criarGestor(nome, idade) {
    try {
        return new Gestor(nome, idade);
    } catch (erro) {
        console.error("Erro ao criar gestor:", erro.message);
        return null; // Retorna null em caso de erro
    }
}
function exibirGestor(gestor) {
    if (gestor) {
        console.log(gestor);
    } else {
        console.log("Não foi possível exibir o gestor devido a um erro.");
    }
}
const gestor1 = criarGestor("Lucas", idadeGestor);
exibirGestor(gestor1);
