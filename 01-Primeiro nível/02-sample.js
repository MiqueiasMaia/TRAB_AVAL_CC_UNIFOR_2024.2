const acessoAtivo = true;

function verificarAcesso(usuario) {
    if (!usuario || typeof usuario.isAdmin !== "boolean") {
        throw new Error("O objeto 'usuario' deve ser válido e possuir a propriedade 'isAdmin' como booleano.");
    }
    return acessoAtivo && usuario.isAdmin;
}
function exibirMensagemAcesso(temAcesso) {
    if (temAcesso) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}
const usuario = { nome: "João", isAdmin: true };

try {
    const temAcesso = verificarAcesso(usuario);
    exibirMensagemAcesso(temAcesso);
} catch (error) {
    console.error("Erro:", error.message);
}

