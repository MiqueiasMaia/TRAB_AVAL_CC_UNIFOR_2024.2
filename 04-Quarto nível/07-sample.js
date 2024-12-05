async function buscarEspecie() {
    try {
        const resposta = await fetch("https://swapi.dev/api/species/1/");
    
        if (!resposta.ok) {
            throw new Error("Espécie não encontrada.");
        }

        const especie = await resposta.json();
        
        if (especie.average_lifespan) {
            console.log(`A expectativa de vida média é ${especie.average_lifespan} anos.`);
        } else {
            console.log("A expectativa de vida média não está disponível.");
        }
    } catch (erro) {
        console.error("Erro:", erro.message);
    }
}

buscarEspecie();