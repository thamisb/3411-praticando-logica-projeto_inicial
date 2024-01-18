// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigo
function adicionar() {
  const nomeInput = document.getElementById('nome-amigo');
  const nomeAmigo = nomeInput.value.trim();

  if (nomeAmigo !== '') {
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    nomeInput.value = ''; // Limpa o campo após adicionar o amigo
  } else {
    alert('Por favor, digite um nome de amigo válido.');
  }
}

// Função para sortear os amigos
function sortear() {
    const listaSorteio = document.getElementById('lista-sorteio');
    
    if (amigos.length < 2) {
      alert('Adicione pelo menos dois amigos antes de sortear.');
      return;
    }
  // Escolhe um amigo aleatório
  const amigoSorteado = escolherAmigoAleatorio();

  // Exibe o resultado do sorteio
  listaSorteio.textContent = amigoSorteado;
}

// Função para escolher um amigo aleatório
function escolherAmigoAleatorio() {
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    return amigoSorteado;
  }

// Função para reiniciar
function reiniciar() {
  amigos = [];
  atualizarListaAmigos();
  document.getElementById('lista-sorteio').textContent = '';
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('lista-amigos');
  listaAmigos.textContent = amigos.join(', ');
}
