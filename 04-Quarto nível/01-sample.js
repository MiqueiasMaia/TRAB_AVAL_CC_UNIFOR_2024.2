function exibirNomePlaneta(planetaName) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
    <div class="alert alert-success" role="alert">
    <strong>Nome:</strong> ${planetaName}<br>
    </div>`;
}

async function buscarPlaneta() {
    let resposta;
    let planeta;
    try {
        resposta = await fetch("https://swapi.dev/api/planets/1/");
        planeta = await resposta.json();
        console.log(planeta.name);
        exibirNomePlaneta(planeta.name);
    } catch (error) {
        console.log("error: ", error);
    }
}

buscarPlaneta();
