# Electron: Primeiros Passos no Framework para desenvolvimento de Apps Desktop Multiplataforma

Este repositório contém arquivos do projeto da apresentação além dos arquivos PowerPoint e PDF da Apresentação.

› Instalação do Node: 
–– Site Oficial: https://nodejs.org/en/
– Faça download do pacote referente ao seu sistema operacional no site oficial (link acima), após download concluído abra o instalador e siga as instruções de instalação.

› Instalação do Electron com NPM:

–– Site Oficial: https://electronjs.org/
– Comando para instalação (após ter instalado o node):

$ npm i -D electron@latest

* O comando acima se encontra na página inicial do site oficial do electron, tem três comandos na página principal e um deles é este para o último release oficial, os outros são para versões beta e nightly.

» Para rodar o Projeto:

    » Passo 1: Instalar o Node + NPM e o Electron;
    » Passo 2: Clonar o repositório do projeto (com o VS Code, GitHub Desktop, GitKraken, etc...);
    » Passo 3: Escolher um Editor de Texto de sua preferência (Atom, Brackets, Sublime, VS Code), desde que você saiba sair dele (VIM :P);
    » Passo 4: Abrir o repositório clonado no Editor de Texto escolhido;
    » Passo 5: Verifique os arquivos baixados, e rode os seguintes comandos:

        » $ npm install electron --save-dev [--save-exact]
        » $ npm install
        » $ npm start

        » Para mais informações, consulte: https://www.npmjs.com/package/electron

    » Passo 6: A janela com sua aplicação irá ser construída como uma janela nativa do seu sistema operacional, verifique se há erros e explore a aplicação;
    » Passo 7: Divirta-se utilziando este incrível framework.

# Sobre o Projeto:

» Instalação:

    » Os passos para instalação estão listados acima (neste mesmo documento, se você chegou até aqui provavelmente já leu);
    » Os comandos forma feitos utilizando as versões mais recentes de tecnologia (Node + NPM e Electron);
    » O projeto hospedado no repositório do GitHub está somente com os pacotes principais, algumas bibliotecas do node_modules foram removidas no .gitignore para evitar que você baixe arquivos desnecessários, além de que a última versão foi feita no macOS, sendo assim o NPM baixou pacotes especificos para a plataforma, então você teria de baixar tudo de novo (Cerca de 200MB de arquivos) para o Windows ou Linux.
    
» Código:

    » Todos os arquivos estão comentados para facilitar a compreensão, mas é desejável que você tenha alguma familiaridade com HTML e CSS, além de JavaScript  (de preferência em suas versões mais recentes);
    » Como estilização das páginas utilizamos o Framework Materializer, porém você pode utilizar Bootstrap, ou qualquer outro framework, além de CSS puro;
    » Ao efetuar alguma alteração de nome de arquivo ou pasta, certifique-se que o caminho nos respectivos arquivos que o utilizam também foi alterado, para evitar erros ou problemas na execução;
    » Para mais informações, consulte a documentação oficial do Electron, disponível em: https://electronjs.org/docs

» Projeto da Aula:

    » No minicurso nós criamos um aplicativo simples para criar listas de compras, onde tem uma tela inicial com os itens da tela, e uma tela secundária para adicionar itens, além de ter sido explicado o como funciona o framework e cada parte dele o que faz, nós também criamos na hora mais uma janela, adicionando toda a lógica no arquivo JavaScript principal (main.js) e a construção da página simples em HTML (janela2.html);
    » O objetivo era mostrar os primeiros passos no framework, como funciona, onde baixar e obter, além de construir a primeira aplicação do zero (com auxilio de alguns arquivos pré codificados para não perder tempo copiando código).

» Árvore de Arquivos e Estrutura do Projeto:

    Electron
    ├── .gitignore // Arquivo que ignora pastas no repositório (ex: node_modules e release-builds)
    ├── Apresentação
    │   ├── Electron-Framework.pptx // Apresentação em PowerPoint
    │   ├── Electron-Framework.pdf // Apresentação em PDF
    │   └── Imagens
    │       └── // Todas as imagens utilizadas na Apresentação (PNG, GIF, JPEG, SVG)
    ├── JS
    │   └── main.js
    ├── README.md 
    ├── addWindow.html // Tela que adiciona itens
    ├── assets
    │   └── // Ícones das plataformas
    ├── index.html      // Tela principal da aplicação
    ├── janela2.html    // Tela criada durante o Hands-on
    ├── node_modules    // Módulos do Node (esta pasta não foi enviada para o repositório, mas você deve baixar através dos passos iniciais)
    ├── package-lock.json
    ├── package.json // Arquivos de configuração do Electron
    └── release-builds
        └── // Arquivos gerados conforme sua plataforma (macOS, Linux, Windows) após compilar
