🧮 Calculadora em React + Vite

Uma calculadora simples e funcional desenvolvida com React e Vite, focada em desempenho, modularidade e uma interface intuitiva. Este projeto demonstra como estruturar lógica matemática em aplicações front-end e como lidar com desafios de renderização dinâmica em tempo real.

🚀 Tecnologias Utilizadas

- React: Biblioteca principal para construção da interface e gerenciamento de estado.
- Vite: Ferramenta de build ultrarrápida com suporte nativo a módulos ES e HMR (Hot Module Replacement).
- JavaScript (ES6+): Linguagem base para lógica e manipulação de componentes.
- CSS: Estilização responsiva e limpa para o layout da calculadora.
- ESLint: Padronização de código e boas práticas de desenvolvimento.
  
⚙️ Funcionalidades

- Operações básicas: adição, subtração, multiplicação e divisão.
- Limpeza de tela (AC) e remoção de último dígito (DEL).
- Suporte a ponto decimal.
- Avaliação de expressões matemáticas com ordem de precedência.
- Interface responsiva e amigável.
  
🧠 Desafios Enfrentados

1. Estruturação da Lógica Matemática
Implementar uma calculadora exige mais do que apenas somar números. Foi necessário:
- Gerenciar o estado da expressão: Cada clique de botão altera a expressão atual, que precisa ser armazenada e atualizada corretamente.
- Evitar erros de sintaxe: Garantir que o usuário não insira operadores consecutivos ou inicie com um operador inválido.
- Avaliação segura: Utilizar eval() com cautela ou implementar um parser próprio para evitar vulnerabilidades e garantir precisão.
- Ordem de precedência: Multiplicações e divisões devem ser resolvidas antes de somas e subtrações, respeitando a lógica matemática.
  
2. Display Funcional e Dinâmico
- Atualização em tempo real: O display precisa refletir cada entrada do usuário instantaneamente.
- Scroll automático: Em expressões longas, o display deve rolar para mostrar os últimos dígitos.
- Feedback visual: Botões pressionados devem ter destaque para melhorar a experiência do usuário.
  
🧰 Estrutura do Projeto
calculadora/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Calculator.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .eslintrc.cjs
├── package.json
└── vite.config.js


📦 Como Executar Localmente

 Clone o repositório
git clone https://github.com/gabrielvitorabade/calculadora

 Acesse o diretório
cd calculadora

 Instale as dependências
npm install

 Inicie o servidor de desenvolvimento
npm run dev


💡 Possíveis Melhorias

- Adição de operações avançadas (porcentagem, raiz quadrada, etc).
- Histórico de cálculos.
- Suporte a teclado físico.
- Temas personalizados.
  
📄 Licença

Este projeto está sob a licença MIT.

