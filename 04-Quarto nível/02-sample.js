async function buscarFilme() {
    try {
        const resposta = await fetch("https://swapi.dev/api/films/1/");
        
        if (!resposta.ok) {
            throw new Error("Erro ao buscar o filme.");
        }

        const filme = await resposta.json();
        console.log(filme.title.toUpperCase()); // "title" é o campo correto, não "titulo"

    } catch (erro) {
        console.error("Erro:", erro.message);
    }
}

buscarFilme();
