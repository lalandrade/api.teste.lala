// Estrutura simulada de produtos com informações e links das imagens pq a API não estava liberando as imagens.  Vou deixar o codigo antigo que recebia as imagens corretamente, mas não recebia resposta por causa da API escolhida.
const produtosEletronicos = [
    {
        id: 1,
        title: "Controle",
        price: 99.99,
        description: "Controle de videogame sem fio.",
        category: { name: "Acessórios" },
        creationAt: "2024-01-01T00:00:00Z",
        images: ["../img/controle.jpeg"],
    },
    {
        id: 2,
        title: "Fone de Ouvido",
        price: 149.99,
        description: "Fone de ouvido sem fio com cancelamento de ruído.",
        category: { name: "Áudio" },
        creationAt: "2024-01-02T00:00:00Z",
        images: ["../img/fone.jpeg"],
    },
    {
        id: 3,
        title: "Torradeira",
        price: 299.99,
        description: "Torradeira elétrica com várias funções.",
        category: { name: "Eletrodomésticos" },
        creationAt: "2024-01-03T00:00:00Z",
        images: ["../img/torradeira.jpeg"],
    },
    {
        id: 4,
        title: "Mouse",
        price: 79.99,
        description: "Mouse gamer com alta precisão.",
        category: { name: "Acessórios" },
        creationAt: "2024-01-04T00:00:00Z",
        images: ["../img/mouse.jpeg"],
    },
    {
        id: 5,
        title: "Notebook",
        price: 2499.99,
        description: "Notebook com processador de última geração.",
        category: { name: "Computadores" },
        creationAt: "2024-01-05T00:00:00Z",
        images: ["../img/notebook.jpeg"],
    },
    {
        id: 6,
        title: "Notebook Cinza",
        price: 2599.99,
        description: "Notebook cinza com tela de alta definição.",
        category: { name: "Computadores" },
        creationAt: "2024-01-06T00:00:00Z",
        images: ["../img/notebook-cinza.jpeg"],
    },
    {
        id: 7,
        title: "Fone Vermelho",
        price: 159.99,
        description: "Fone de ouvido vermelho com som de alta qualidade.",
        category: { name: "Áudio" },
        creationAt: "2024-01-07T00:00:00Z",
        images: ["../img/fone-vermelho.jpeg"],
    },
    {
        id: 8,
        title: "Celular",
        price: 1999.99,
        description: "Celular com câmera de alta resolução.",
        category: { name: "Celulares" },
        creationAt: "2024-01-08T00:00:00Z",
        images: ["../img/celular.jpeg"],
    },
    {
        id: 9,
        title: "Relógio Smart",
        price: 499.99,
        description: "Relógio inteligente com monitoramento de saúde.",
        category: { name: "Wearables" },
        creationAt: "2024-01-09T00:00:00Z",
        images: ["../img/relogio-smart.jpeg"],
    },
];

// Função que carrega os itens eletrônicos e renderiza na tela
const loadAllWithPromiseAll = async () => {
    const Eletronicos = produtosEletronicos; // Usa os produtos locais
    console.log('Eletronicos:', Eletronicos);
    renderEletronicos(Eletronicos); // Chamada correta para renderizar
};

// Função que renderiza os itens no DOM
function renderEletronicos(Eletronicos) {
    const EletronicosContainer = document.getElementById('Eletronicos-container');
    
    Eletronicos.forEach((product) => {
        const divProduct = document.createElement('div');
        divProduct.id = `eletronico-${product.id}`;
        
        // Usa a imagem local
        const firstImage = product.images[0];

        // Renderizando apenas a imagem inicialmente
        divProduct.innerHTML = `
            <img src="${firstImage}" alt="Imagem do produto" class="product-image">
            <div class="product-details" id="details-${product.id}" style="display: none;">
                <h2>${product.title}</h2>
                <p>Preço: $${product.price.toFixed(2)}</p>
                <p>Descrição: ${product.description}</p>
                <p>Categoria: ${product.category.name}</p>
                <p>Data de Criação: ${new Date(product.creationAt).toLocaleDateString()}</p>
            </div>
        `;
        
        // Adicionar classes para estilização
        divProduct.classList.add("product-box");

        // Adiciona o div ao container
        EletronicosContainer.appendChild(divProduct);

        // Evento de clique na imagem para exibir as informações
        const productImage = divProduct.querySelector('.product-image');
        productImage.addEventListener("click", () => {
            const details = document.getElementById(`details-${product.id}`);
            details.style.display = details.style.display === "none" ? "block" : "none";
        });
    });
}

// Iniciando o carregamento e renderização dos eletrônicos
loadAllWithPromiseAll();

