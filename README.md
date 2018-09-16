![Typescript](https://img.shields.io/badge/Typescript-3.0.3-green.svg)
![Mongoose](https://img.shields.io/badge/Mongoose-5.2.15-green.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-2.2.16-green.svg)
![ExpressJs](https://img.shields.io/badge/ExpressJs-4.16.3-green.svg)
![NodeJs](https://img.shields.io/badge/NodeJs-8.11.4-green.svg)

# Projeto Maria front-end 3ª fase

<h2>
  <img align="left" src="https://cardinalsblog.adw.org/wp-content/uploads/sites/3/2013/05/mothers-day-blog.jpg" width="35%">
  Projeto Integrador SENAI em parceria com a Intelbras, desenvolvido entre as turmas da 1ª à 5ª fase do Curso Superior de Análise e Desenvolvimento de Sistemas.
</h2>
</br>
</br>

### Links importantes:
#### [ # Trello ](https://trello.com/b/TcyF5XC3/3-fase)
#### [ # Telegram ](https://t.me/joinchat/G-7HHFBtas9geUzThI5TVQ)
#### [ # Projeto Maria Java ](https://github.com/senaisc-florianopolis/projeto-maria)
#### [ # Projeto Maria Angular ](https://github.com/gabrielsegalla/Projeto-Base)
#### [ # Google Drive ](https://drive.google.com/drive/folders/1D-q5BeU-gfoT5DuxaNYGkkIB1ICzTSbi?usp=sharing)

### Descrição do projeto: 
**TO-DO**

### Editor
Também utilizamos a IDE/Editor VsCode. [->Baixe aqui<-](https://code.visualstudio.com/Download)

Esse projeto foi desenvolvido com as tecnologias do framework **MEAN**:</br>
**M - MongoDB**</br>
**E - Express Js**</br>
**A - Angular**</br>
**N - Nodejs**</br>

---

### Instalação do projeto:

#### Instruções abaixo para **windows**:

> Instale o npm: [-> aqui <-](https://www.npmjs.com/get-npm)

>Para verificar a instalação rode o comandos como:
- **npm -v**
- **node -v**

> Se a instalação estiver correta entre na pasta do projeto que clonou e rode o comando abaixo para instalar as dependências:
- **npm i**

> Faça o download e instação do mongoDB [-> aqui <-](https://www.mongodb.com/download-center?jmp=nav#community)

> Faça o download e instalação do Robo3T [-> aqui <-](https://robomongo.org/download)

**O Robo3T é usado para manipular os dados do mongoDB, muito parecido com o MySql Workbench**

**Para testar as requisições você poderá utilizar as duas opções abaixo:**
> Programa Postman [-> aqui <-](https://www.getpostman.com/apps)

> Extensão do Chrome - Restlet Client [-> aqui <-](https://chrome.google.com/webstore/detail/restlet-client-rest-api-t/aejoelaoggembcahagimdiliamlcdmfm)

#### Com as dependências e ferramentas instaladas agora para trabalhar no projeto siga as intruções abaixo:

> Para utilizar a aplicação o mongoDB deve estar rodando, então primeiro rode o mongoDB.

> Agora os arquivos typescript precisam ser transpilados para o javascript. Na primeira vez que rodar a aplicação, siga o comando abaixo:
- **tsc**

**O comando acima vai transpilar os arquivos typescript para a pasta dist/, toda vez que precisar por algum motivo refazer esse processo por algum erro, apenas exclua a pasta dist/ e rode novamente o comando acima.**

> Com o mongoDB rodando e com os arquivos .js na pasta dist/ agora você poderá rodar o comando abaixo para iniciar a aplicação:
- **npm run watch**

**O comando acima vai manter a aplicação "escutando" cada alteração feita no código**

---

**Para contribuir com o projeto, siga as instruções abaixo:**
A modificação ou implementação do código poderá ser feita via uma única branch do grupo com as modificações a serem submetidas ao pull request para serem mergiadas a branch master, ou ainda cada aluno poderá codificar em sua própria branch e também submeter a pull request para mergiar na master. O push direto na master foi mantido como fechado para mantermos o controle do código de "produção" funcional na master e a adição das modificações por outras branches para manter uma melhor organização do código.


> Para criar uma nova branch
- git checkout -b < **nome-branch** >
> Para verificar se está na branch que criou
- git status 
> Adicione as modificações com **git add** e comite com o **git commit** e depois dê o push:
- git push origin < **nome-branch** >