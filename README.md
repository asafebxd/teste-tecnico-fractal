# teste-tecnico-fractal

Fractal Web App

Descrição do Projeto

Projeto full stack para teste tecnico, o App permite criar, editar, deletar,visualizar os lacres criados e filtrar lacres por valores: codigo e ecp

Variáveis de ambiente

em ./server/.env adicione variáveis:

USER=seu-usuario
PASSWORD=sua-senha

Instalando dependencias

Run npm install em test-tecnico-fractal
cd client
Run npm install
cd server
Run npm install
cd ../
Run npm run dev para inciar projeto

cd server
Run npm test para rodar bateria de testes automatizados

Tecnologias utilizadas

Back-End:
Node.js
Express.js
Cors
Nodemon
Jest.js
Mongoose

Front-End:
React.js
React-Icons
React-Router-Dom|
Tailwindcss

Relatório

Validação de campos front-end:

Input são required
API testada via insomnia durante processo de desenvolvimento
Estruturas de pastas em padrão MVC
Devem ser preenchidos com text válido
Não aceita submit vazio
Campo 'Ativo' limitado select booleano de true ou false
Filtro por texto .toLowerCase() para evitar erros de digitação

Validação de dados back-end:

Tipos de dados especificados no Schema da tabela
Definido casto como false em Schema para evitar conversao automatica de campo pelo mongoose
Trata valor de dado 'ativo' como default 'false' para tratar de requisições com apenas 'codigo' e 'ecp'
Teste automatizado de POST para certificar que servidor não aceita requisições de tipos inválidos
Linhas documentadas com comentários com descrição da função de cada bloco de código
