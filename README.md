# Lista de Contatos

## Descrição

Desenvolvimento de uma aplicação web utilizando Next.js e React para gerenciar contatos. A aplicação permite aos usuários visualizar uma lista de contatos, incluindo nome, e-mail e foto. Ao selecionar um contato, o usuário pode acessar uma página com informações detalhadas sobre ele. Os dados dos contatos são obtidos a partir de uma API externa.

## Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações server-side rendering (SSR) e geração de sites estáticos (SSG).
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Jest**: Framework de testes JavaScript.
- **Babel**: Transpiler JavaScript.

## Funcionalidades

- **Autenticação**: O projeto utiliza uma rota privada para proteger acessos não autorizados. O componente `PrivateRoute` verifica se o usuário está autenticado ao tentar acessar rotas protegidas. Ele utiliza o `localStorage` para verificar a presença de um token ou identificador de usuário. Se o usuário não estiver autenticado, ele é redirecionado para a página inicial (/).
- **Listagem de Contatos**: Exibição de uma lista de contatos com nome, e-mail e foto.
- **Detalhes do Contato**: Página com informações detalhadas do contato escolhido.
- **Responsividade**: Design adaptável a diferentes tamanhos de tela.

## Pré-requisitos

Certifique-se de ter os seguintes itens instalados:

- **Node.js** (versão recomendada: `16.x` ou superior)
- **npm** ou **Yarn**

## Instalação

Clone o repositório:

```bash
git clone https://github.com/WillianBatista19/lista-contatos
```
Navegue até o diretório do projeto:

```bash
cd lista-contatos
```
Instale as dependências:

```bash
npm install
# ou
yarn install
```
Execução
Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```
Abra seu navegador e acesse http://localhost:3000.

Início Rápido
Após instalar as dependências e iniciar o servidor de desenvolvimento, você pode começar a editar o projeto. A página principal do projeto pode ser modificada editando o arquivo app/page.tsx. As alterações são refletidas automaticamente no navegador.

Configuração de Fontes
Este projeto utiliza next/font para otimizar e carregar automaticamente a fonte Inter, uma fonte personalizada do Google. Não é necessário configurar manualmente as fontes, pois isso é gerenciado automaticamente pelo Next.js.

## Executando Testes
Para garantir que o seu ambiente está configurado corretamente e que todos os testes estão passando, siga estas etapas:

Executar Testes

Para rodar todos os testes do projeto e verificar a cobertura, use o comando:

```bash
npm test
# ou
yarn test
```
Isso executará todos os testes configurados com Jest e mostrará um resumo dos resultados.

Verificar a Cobertura de Testes

Para gerar um relatório de cobertura de testes, use o comando:

```bash
npm test -- --coverage
# ou
yarn test --coverage
```
Esse comando executa os testes e gera um relatório de cobertura de código que será exibido no terminal.

## Adicionar Novos Testes

Se você adicionar novos arquivos ou componentes ao projeto, não se esqueça de criar testes apropriados para garantir que o código esteja funcionando conforme o esperado. Os testes devem ser colocados na pasta __tests__ ou em arquivos com o sufixo .test.tsx (ou .spec.jsx).
