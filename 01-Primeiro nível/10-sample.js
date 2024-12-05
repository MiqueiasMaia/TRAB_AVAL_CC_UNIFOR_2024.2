const usuario = {
    nome: "João",
    idade: 25
};
function validarUsuario(usuario) {
    if (typeof usuario.nome !== "string" || usuario.nome.trim() === "") {
        throw new Error("O nome do usuário deve ser uma string não vazia.");
    }
    if (typeof usuario.idade !== "number" || usuario.idade <= 0) {
        throw new Error("A idade do usuário deve ser um número positivo.");
    }
}
function exibirUsuario(usuario) {
    try {
        validarUsuario(usuario);
        console.log(`${usuario.nome} tem ${usuario.idade} anos.`);
    } catch (erro) {
        console.error("Erro ao exibir o usuário:", erro.message);
    }
}
exibirUsuario(usuario);