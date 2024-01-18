function alterarStatus(id) {
    var item = document.getElementById("game-" + id);

    // Verifica se o botão atual é para "Alugar" ou "Devolver"
    var isAlugar = item.querySelector('.dashboard__item__button').classList.contains('dashboard__item__button--return');

    // Obtém o nome do jogo corrigindo a seleção e usando .innerText
    var nomeJogo = item.querySelector('.dashboard__item__name').innerText;
    alert("Jogo selecionado: " + nomeJogo);
    
    // Alterna entre "Alugar" e "Devolver"
    if (isAlugar) {
        item.querySelector('.dashboard__item__button').classList.remove('dashboard__item__button--return');
        item.querySelector('.dashboard__item__button').innerText = "Alugar";
        // Adicione aqui a lógica para mudar o estado do jogo para disponível
    } else {
        item.querySelector('.dashboard__item__button').classList.add('dashboard__item__button--return');
        item.querySelector('.dashboard__item__button').innerText = "Devolver";
        // Adicione aqui a lógica para mudar o estado do jogo para alugado
    }
}
