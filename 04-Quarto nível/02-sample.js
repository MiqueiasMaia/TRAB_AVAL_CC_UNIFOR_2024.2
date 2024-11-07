async function buscarFilme() {
  let resposta;
  let filme;
  try {
    resposta = await fetch("https://swapi.dev/api/films/1/");
    filme = await resposta.json();
    console.log(filme.titulo.toUpperCase());
  } catch (error) {
    console.log("error: ", error);
  }

}

buscarFilme();
