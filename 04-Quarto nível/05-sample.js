async function buscarPersonagem() {
    const id = 1000000000000;
    try {
        const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);
    
        if (!resposta.ok) {
            throw new Error("Personagem não encontrado.");
        }

        const personagem = await resposta.json();
        console.log(personagem.name);
    } catch (erro) {
        console.error("Erro:", erro.message);
    }
}

buscarPersonagem();
