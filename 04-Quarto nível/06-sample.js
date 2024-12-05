const idNave = 10;

async function buscarNave(id) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/starships/${id}/`);
        
        if (!resposta.ok) {
            throw new Error("Nave não encontrada.");
        }

        const nave = await resposta.json();
        console.log(nave.name); 
    } catch (erro) {
        console.error("Erro:", erro.message);
    }
}

buscarNave(idNave);

