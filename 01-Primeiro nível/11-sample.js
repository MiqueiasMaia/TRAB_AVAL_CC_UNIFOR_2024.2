const MILISSEGUNDOS_POR_ANO = 31536000000;
const LIMITE_TENTATIVAS_LOGIN = 4;
const INDICE_CARLOS = 0;
const INDICE_JOSE = 2;
const INDICE_MARIA = 3;

const DADOS_CRIACAO_LOGIN_USUARIOS = {
    carlos: { anoCriacao: 2023, mesCriacao: 1, diaCriacao: 15, anoLogin: 2024, mesLogin: 8, diaLogin: 1 },
    ana: { anoCriacao: 2020, mesCriacao: 4, diaCriacao: 22, anoLogin: 2024, mesLogin: 7, diaLogin: 31 },
    jose: { anoCriacao: 2022, mesCriacao: 10, diaCriacao: 5, anoLogin: 2024, mesLogin: 6, diaLogin: 10 },
    maria: { anoCriacao: 2021, mesCriacao: 2, diaCriacao: 10, anoLogin: 2023, mesLogin: 12, diaLogin: 25 }
};

class Usuario {
    constructor({ nome, idade, funcao, dataCriacao, dataUltimoLogin, ativo, tentativasLogin }) {
        try {
            this.nome = nome;
            this.idade = idade;
            this.funcao = funcao;
            this.dataCriacao = dataCriacao;
            this.dataUltimoLogin = dataUltimoLogin;
            this.ativo = ativo;
            this.tentativasLogin = tentativasLogin;
        } catch (error) {
            console.error(`Erro ao inicializar o usuário ${nome}: ${error.message}`);
        }
    }

    verificarStatus() {
        try {
            console.log(this.ativo ? "Ativo." : "Inativo");
        } catch (error) {
            console.error(`Erro ao verificar status do usuário ${this.nome}: ${error.message}`);
        }
    }

    verificarAcesso() {
        try {
            console.log(this.funcao === "admin" ? "Admin pode acessar." : "Convidado tem acesso limitado.");
        } catch (error) {
            console.error(`Erro ao verificar acesso do usuário ${this.nome}: ${error.message}`);
        }
    }
}

function tentativasExcessivas(usuario, limite = LIMITE_TENTATIVAS_LOGIN) {
    try {
        return usuario.tentativasLogin > limite;
    } catch (error) {
        console.error(`Erro ao verificar tentativas de login para o usuário ${usuario.nome}: ${error.message}`);
        return false;
    }
}

function exibirMensagemTentativas(usuario, limite) {
    try {
        const mensagem = tentativasExcessivas(usuario, limite)
            ? "Tentativas de login excessivas."
            : "Tentativas de login sob controle.";
        console.log(mensagem);
    } catch (error) {
        console.error(`Erro ao exibir mensagem de tentativas de login ${usuario.nome}: ${error.message}`);
    }
}

function ultimoLoginMaisRecente(usuario1, usuario2) {
    try {
        return usuario1.dataUltimoLogin > usuario2.dataUltimoLogin ? usuario1 : usuario2;
    } catch (error) {
        console.error("Erro ao comparar datas de último login:", error.message);
        return null;
    }
}

function exibirMensagemUltimoLogin(usuario1, usuario2) {
    try {
        const usuarioMaisRecente = ultimoLoginMaisRecente(usuario1, usuario2);
        if (usuarioMaisRecente) {
            console.log(`${usuarioMaisRecente.nome} logou mais recentemente.`);
        } else {
            console.log("Erro ao determinar o último login.");
        }
    } catch (error) {
        console.error(`Erro ao exibir mensagem de último login: ${error.message}`);
    }
}

function usuarioCriadoRecentemente(usuario) {
    try {
        const agora = new Date();
        return agora - usuario.dataCriacao < MILISSEGUNDOS_POR_ANO;
    } catch (error) {
        console.error(`Erro ao verificar se o usuário ${usuario.nome} foi criado recentemente: ${error.message}`);
        return false;
    }
}

function exibirMensagemUsuarioRecente(usuario) {
    try {
        const mensagem = usuarioCriadoRecentemente(usuario)
            ? "Usuário criado recentemente."
            : "Usuário antigo.";
        console.log(mensagem);
    } catch (error) {
        console.error(`Erro ao exibir mensagem de criação recente para o usuário ${usuario.nome}: ${error.message}`);
    }
}

const usuarios = [
    new Usuario({
        nome: "Carlos",
        idade: 25,
        funcao: "admin",
        dataCriacao: new Date(
            DADOS_CRIACAO_LOGIN_USUARIOS.carlos.anoCriacao, 
            DADOS_CRIACAO_LOGIN_USUARIOS.carlos.mesCriacao, 
            DADOS_CRIACAO_LOGIN_USUARIOS.carlos.diaCriacao
        ),
        dataUltimoLogin: new Date(
            DADOS_CRIACAO_LOGIN_USUARIOS.carlos.anoLogin, 
            DADOS_CRIACAO_LOGIN_USUARIOS.carlos.mesLogin, 
            DADOS_CRIACAO_LOGIN_USUARIOS.carlos.diaLogin
        ),
        ativo: true,
        tentativasLogin: 100
    }),
    new Usuario({
        nome: "Ana",
        idade: 30,
        funcao: "guest",
        dataCriacao: new Date(
            DADOS_CRIACAO_LOGIN_USUARIOS.ana.anoCriacao, 
            DADOS_CRIACAO_LOGIN_USUARIOS.ana.mesCriacao, 
            DADOS_CRIACAO_LOGIN_USUARIOS.ana.diaCriacao
        ),
        dataUltimoLogin: new Date(
            DADOS_CRIACAO_LOGIN_USUARIOS.ana.anoLogin, 
            DADOS_CRIACAO_LOGIN_USUARIOS.ana.mesLogin, 
            DADOS_CRIACAO_LOGIN_USUARIOS.ana.diaLogin
        ),
        ativo: true,
        tentativasLogin: 50
    }),
];
console.log(`Usuários admins: ${usuarios.filter(usuario => usuario.funcao === "admin").length}`);
usuarios[INDICE_CARLOS].verificarStatus();
usuarios[INDICE_JOSE].verificarAcesso();

exibirMensagemTentativas(usuarios[INDICE_JOSE]);
exibirMensagemUltimoLogin(usuarios[INDICE_CARLOS], usuarios[INDICE_MARIA]);
exibirMensagemUsuarioRecente(usuarios[INDICE_MARIA]);