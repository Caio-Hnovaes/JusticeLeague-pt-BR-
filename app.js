function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    if (campoPesquisa === "" || campoPesquisa.length < 1) {
        section.innerHTML = "Digite um nome válido para pesquisar.";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <img src="${dado.imagem}" alt="${dado.titulo}">
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Saiba mais sobre este personagem</a>
                </div>
            `;
        }
        
    }

    if (resultados === "") {
        section.innerHTML = "Nenhum resultado encontrado. Digite o nome corretamente.";
    } else {
        section.innerHTML = resultados;
    }

}