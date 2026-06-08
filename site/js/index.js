function filterElements(genero, botao) {

    const elementos = document.querySelectorAll(".div_gamescard"); /*Busca todos os elementos que possuem a classe: <div class="div_gamescard" e Retorna uma lista.*/

    elementos.forEach((elemento) => {
        elemento.classList.remove("show");

        if (genero === "all" || elemento.classList.contains(genero)) {
            elemento.classList.add("show");
        }
    });

    const botoes = document.querySelectorAll(".button");

    botoes.forEach((botaoAtual) => {
        botaoAtual.classList.remove("item_ativo");
    });

    botao.classList.add("item_ativo");
}

window.onload = function() {
    const homeButton = document.querySelector(".item_ativo");
    filterElements("all", homeButton);
}
