# 🍔 Geras Burguer

Projeto de uma hamburgueria virtual, desenvolvido com **HTML**, **Tailwind CSS** e **JavaScript**.  
O objetivo é permitir que os clientes visualizem o cardápio, adicionem itens ao carrinho e finalizem pedidos via WhatsApp.

---

## 📂 Estrutura do Projeto

.
├── assets/ # Imagens de produtos (hambúrgueres, bebidas, etc.)
├── node_modules/ # Dependências instaladas pelo npm
├── styles/
│ ├── output.css # Arquivo gerado pelo Tailwind
│ └── style.css # Estilos adicionais (se necessário)
├── index.html # Estrutura principal do site
├── script.js # Lógica do carrinho e integração com WhatsApp
├── package.json # Configurações do projeto
├── package-lock.json # Controle de dependências
└── tailwind.config.js # Configuração do Tailwind

yaml
Copiar código

---

## 🚀 Como rodar o projeto

1) **Clone o repositório** (ou copie os arquivos):
```bash
git clone <url>
Instale as dependências:

bash

npm install
Suba o ambiente de desenvolvimento (watch do Tailwind):

bash

npm run dev
Abra o projeto no navegador abrindo o arquivo index.html.

```
npm run dev: compila o Tailwind em modo watch (desenvolvimento).

npm run build: gera o CSS minificado para produção.

✨ Funcionalidades
Exibição do cardápio de hambúrgueres e bebidas.

Adição e remoção de itens do carrinho.

Cálculo automático do valor total.

Validação do endereço de entrega.

Envio do pedido diretamente para o WhatsApp da hamburgueria.

Verificação automática do horário de funcionamento (18h às 22h).

🛠️ Tecnologias Utilizadas
HTML5 – Estrutura do site

Tailwind CSS – Estilização e responsividade

JavaScript (ES6+) – Lógica do carrinho e integração com WhatsApp

Font Awesome – Ícones
