async function buscarPlanetaRecursivo(id) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${id}/`);
        
        if (!resposta.ok) {
            console.log("Não há mais planetas disponíveis.");
            return;
        }

        const planeta = await resposta.json();
        console.log(planeta.name);

        buscarPlanetaRecursivo(id + 1);
    } catch (erro) {
        console.error("Erro:", erro.message);
    }
}

buscarPlanetaRecursivo(1);