function mostrarResultado(personagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
    <div class="alert alert-success" role="alert">
    <strong>Nome:</strong> ${personagem.name || 'Não disponível'}<br>
    <strong>Altura:</strong> ${personagem.height || 'Não disponível'} cm<br>
    <strong>Peso:</strong> ${personagem.mass || 'Não disponível'} kg
    </div>`;
}

function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

async function buscarPersonagem() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("personagemId").value;

    if (!id || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }

    try {
        const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);

        if (!resposta.ok) {
            throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
        }

        const personagem = await resposta.json();
        mostrarResultado(personagem);

    } catch (erro) {
        mostrarErro(erro.message, "danger");
    }
}


