async function buscarPersonagem(id) {
    const url = `https://swapi.dev/api/people/${id}/`;
    const resposta = await fetch(url);
    
    if (!resposta.ok) {
        throw new Error("Personagem não encontrado.");
    }
    
    const personagem = await resposta.json();
    console.log(personagem.name);
}

const lukeId = 1;
buscarPersonagem(lukeId);
