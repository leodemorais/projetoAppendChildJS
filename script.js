// Método simples para adicionar um título
document.body.innerHTML += '<h1 id="titulo">Título do Site</h1>';

// Método complexo para adicionar um produto à venda
const produtoContainer = document.createElement('div');
produtoContainer.id = 'produto';

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Nome do Produto';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Descrição detalhada do produto vai aqui.';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 99,99';

const imagemProduto = document.createElement('img');
imagemProduto.src = 'caminho/para/imagem.jpg';
imagemProduto.alt = 'Imagem do Produto';

produtoContainer.appendChild(nomeProduto);
produtoContainer.appendChild(descricaoProduto);
produtoContainer.appendChild(precoProduto);
produtoContainer.appendChild(imagemProduto);

document.body.appendChild(produtoContainer);
