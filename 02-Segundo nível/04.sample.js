const MAX_TENTATIVAS = 3; 
const SENHA_CORRETA = "12345";

function verificarSenha(senha) {
    if (typeof senha !== "string") {
        throw new Error("A senha deve ser uma string.");
    }
    return senha === SENHA_CORRETA;
}
function tentarLogin(senha) {
    if (typeof senha !== "string") {
        throw new Error("A senha fornecida deve ser uma string.");
    }

    let tentativas = 0;

    while (tentativas < MAX_TENTATIVAS) {
        try {
            if (verificarSenha(senha)) {
                return "Login efetuado com sucesso!";
            }
        } catch (error) {
            return error.message; 
        }
        tentativas++;
    }
    return "Tentativas de login excedidas.";
}
try {
    console.log(tentarLogin("123"));
} catch (error) {
    console.error("Erro ao tentar fazer login:", error.message);
}