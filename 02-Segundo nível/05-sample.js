const BONUS_GERENTE = 1000;
const BONUS_SUPERVISOR = 500;
const BONUS_OUTROS_CARGOS = 200;
const DESCONTO_PADRAO = 300;
const FAIXA_1_IMPOSTO = 5000;
const FAIXA_2_IMPOSTO = 3000;
const IMPOSTO_FAIXA_1 = 0.27;
const IMPOSTO_FAIXA_2 = 0.18;
const IMPOSTO_FAIXA_3 = 0.11;
const HORAS_TRABALHADAS_MES = 160;
const VALOR_HORA = 25;

function verificarEntradaPositiva(valor, nomeVariavel) {
    if (typeof valor !== "number" || valor <= 0) {
        throw new Error(`${nomeVariavel} deve ser um número positivo.`);
    }
}
function calcularSalarioBase(horasTrabalhadas, valorHora) {
    verificarEntradaPositiva(horasTrabalhadas, "Horas trabalhadas");
    verificarEntradaPositiva(valorHora, "Valor da hora");

    return horasTrabalhadas * valorHora;
}
function calcularBonus(salarioBase, cargo) {
    if (typeof salarioBase !== "number" || salarioBase <= 0) {
        throw new Error("Salário base deve ser um número positivo.");
    }

    if (cargo === "gerente") {
        return salarioBase + BONUS_GERENTE;
    } else if (cargo === "supervisor") {
        return salarioBase + BONUS_SUPERVISOR;
    } else {
        return salarioBase + BONUS_OUTROS_CARGOS;
    }
}
function calcularDesconto(salarioComBonus) {
    if (typeof salarioComBonus !== "number" || salarioComBonus <= 0) {
        throw new Error("Salário com bônus deve ser um número positivo.");
    }

    return salarioComBonus - DESCONTO_PADRAO;
}
function calcularImposto(salarioComDesconto) {
    if (typeof salarioComDesconto !== "number" || salarioComDesconto <= 0) {
        throw new Error("Salário com desconto deve ser um número positivo.");
    }
    let salarioFinal;
    if (salarioComDesconto > FAIXA_1_IMPOSTO) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * IMPOSTO_FAIXA_1);
    } else if (salarioComDesconto > FAIXA_2_IMPOSTO) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * IMPOSTO_FAIXA_2);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * IMPOSTO_FAIXA_3);
    }

    return salarioFinal;
}
function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    try {
        const salarioBase = calcularSalarioBase(horasTrabalhadas, valorHora);
        const salarioComBonus = calcularBonus(salarioBase, cargo);
        const salarioComDesconto = calcularDesconto(salarioComBonus);
        return calcularImposto(salarioComDesconto);
    } catch (error) {
        console.error("Erro ao calcular o salário:", error.message);
        return null;
    }
}
const salario = calcularSalarioFuncionario(HORAS_TRABALHADAS_MES, VALOR_HORA, "gerente");
if (salario !== null) {
    console.log(`O salário final é: ${salario}`);
}