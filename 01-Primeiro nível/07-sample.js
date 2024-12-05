const nomeUsuario = "Pedro"; 
const idadeUsuario = 25;
const estaAtivo = true;

function verificarStatusUsuario(estaAtivo) {
    try {
        if (typeof estaAtivo !== "boolean") {
            throw new Error("O valor de 'estaAtivo' deve ser um booleano.");
        }
        return estaAtivo ? "ativo" : "inativo";
    } catch (erro) {
        console.error("Erro em verificarStatusUsuario:", erro.message);
        throw erro;
    }
}
function exibirStatusUsuario(nomeUsuario, idadeUsuario, status) {
    try {
        if (typeof nomeUsuario !== "string") {
            throw new Error("O nome do usuário deve ser uma string.");
        }
        if (typeof idadeUsuario !== "number") {
            throw new Error("A idade do usuário deve ser um número.");
        }

        if (status === "ativo") {
            console.log(`${nomeUsuario} tem ${idadeUsuario} anos e está ativo.`);
        } else {
            console.log(`${nomeUsuario} está inativo.`);
        }
    } catch (erro) {
        console.error("Erro em exibirStatusUsuario:", erro.message);
        throw erro;
    }
}
try {
    const status = verificarStatusUsuario(estaAtivo);
    exibirStatusUsuario(nomeUsuario, idadeUsuario, status);
} catch (erro) {
    console.error("Erro ao processar status do usuário:", erro.message);
}
