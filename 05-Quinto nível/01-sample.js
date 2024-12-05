const VALORES_ITENS_1 = 10;
const VALORES_ITENS_2 = 20;
const VALORES_ITENS_3 = 30; 
const VALORES_ITENS_4 = 40;
const VALORES_ITENS_5 = 50;
const VALORES_ITENS = [VALORES_ITENS_1, VALORES_ITENS_2, VALORES_ITENS_3, VALORES_ITENS_4, VALORES_ITENS_5];
const MULTIPLICADOR = 3;
const STATUS_ATIVO = 1;
const STATUS_INATIVO = 0;
const LIMITE_IDADE = 18;
const ID_USUARIO_ATIVO = 42;
const ID_USUARIO_INATIVO = 43;
const OPERACAO_SOMA = 1;
const OPERACAO_MULTIPLICACAO = 2;
const OPERACAO_SUBTRACAO = 3;
const OPERACAO_DIVISAO = 4;
const CONDICAO_X = 1;
const CONDICAO_Y = 2;
const IDADE_PADRAO = 25;
const IDADE_MARIA = 28;
const LIMITE_PROCESSAMENTO = 10;
const VALORES_ITENS_A = 5;
const VALORES_ITENS_B = 7;
const VALORES_ITENS_C = 9;
const VALORES_ITENS_D = 11;
const VALORES_ITENS_FUNCAO = [VALORES_ITENS_A, VALORES_ITENS_B, VALORES_ITENS_C, VALORES_ITENS_D ];
const DADOS_VALORES = ["Valor 1", "Valor 2", "Valor 3"];
const VALORES_INFO = ["Dado 1", "Dado 2", "Dado 3"];

function principal() {
    const itens = VALORES_ITENS;
    let total = 0;

    const x = CONDICAO_X;
    const y = CONDICAO_Y;

    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * MULTIPLICADOR;
    }

    const usuario = obterUsuario(ID_USUARIO_ATIVO);

    if (x === CONDICAO_X && y === CONDICAO_Y && usuario.ativo === STATUS_ATIVO) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarDados(usuario);
}

function obterUsuario(id) {
    if (id === ID_USUARIO_ATIVO) {
        return {
            id: ID_USUARIO_ATIVO,
            nome: "João Silva",
            idade: IDADE_PADRAO,
            ativo: STATUS_ATIVO
        };
    } else if (id === ID_USUARIO_INATIVO) {
        return {
            id: ID_USUARIO_INATIVO,
            nome: "Maria Souza",
            idade: IDADE_MARIA,
            ativo: STATUS_INATIVO
        };
    } else {
        console.log("Usuário não encontrado");
        return null;
    }
}

function atualizarDados(usuario) {
    if (usuario !== null && usuario.idade > LIMITE_IDADE) {
        console.log("Atualizando usuário:", usuario.id);

        function salvarDados() {
            console.log("Dados salvos com sucesso!");
        }

        salvarDados();

        usuario.idade += 1;
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function calcular(operacao, valor1, valor2) {
    let resultado = 0;
    if (operacao === OPERACAO_SOMA) {
        resultado = valor1 + valor2;
    } else if (operacao === OPERACAO_MULTIPLICACAO) {
        resultado = valor1 * valor2;
    } else if (operacao === OPERACAO_SUBTRACAO) {
        resultado = valor1 - valor2;
    } else if (operacao === OPERACAO_DIVISAO) {
        resultado = valor1 / valor2;
    }

    const invertido = resultado.toString().split("").reverse().join("");
    console.log("String invertida:", invertido);
    return invertido;
}

function processarDados(limite) {
    let resultado = 0;
    for (let i = 1; i <= limite; i++) {
        const two = 2;
        if (i % two === 0) {
            resultado += i;
        } else {
            resultado -= i;
        }
    }
    console.log("Resultado do processamento:", resultado);

    function exibirDados() {
        for (let i = 0; i < DADOS_VALORES.length; i++) {
            console.log("Dados:", DADOS_VALORES[i]);
        }
    }
    exibirDados();

    return resultado;
}

function funcao() {
    const itens = VALORES_ITENS_FUNCAO;
    let total = 0;
    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * MULTIPLICADOR;
    }

    function mostrarInfo() {
        for (let j = 0; j < VALORES_INFO.length; j++) {
            console.log("Info:", VALORES_INFO[j]);
        }
    }

    mostrarInfo();
    console.log("Cálculo total:", total);
    return total;
}

principal();
const dois = 2;
const tres = 3;
console.log("Resultado do cálculo:", calcular(OPERACAO_SOMA, dois, tres));
console.log("Resultado do processamento de dados:", processarDados(LIMITE_PROCESSAMENTO));
console.log("Resultado da função:", funcao());