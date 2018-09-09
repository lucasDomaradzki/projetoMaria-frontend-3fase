![Typescript](https://img.shields.io/badge/Typescript-3.0.3-green.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-3.1.4-green.svg)
![Restify](https://img.shields.io/badge/Restify-6.3.4-green.svg)
![NodeJs](https://img.shields.io/badge/NodeJs-8.11.4-green.svg)
![Mongoose](https://img.shields.io/badge/Mongoose-4.13.9-green.svg)

# Projeto Maria Rest Front-end 3ª fase

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
**TO DO QUARTA FASE**

### Descrição do projeto: 
** TO DO **

### Editor
Também utilizamos a IDE/Editor VsCode. [->Baixe aqui<-](https://code.visualstudio.com/Download)

Esse projeto foi desenvolvido com as tecnologias do framework **MEAN**:</br>
**M - MongoDB**</br>
**E - Express Js**</br>
~~**A - Angular**~~</br>
**N - Nodejs**</br>
**R - Restify**</br>

### Instalação do projeto:

#### Instruções abaixo para **windows**:

> Instale o npm: [-> aqui <-](https://www.npmjs.com/get-npm)

>Para verificar a instalação rode o comandos como:
- **npm -v**
- **node -v**

> Se a instalação estiver correta entre na pasta do projeto que clonou e rode o comando abaixo para instalar as dependências:
- **npm i**

> Faça o download e instação do mongoDB [-> aqui <-](https://www.mongodb.com/download-center?jmp=nav#community)

> Crie uma pasta para onde ficará localizado o bando de dados do MongoDB com a estrutura abaixo:
- /data/db

> O mongoDB poderá ser iniciado com o comando de script localizado na pasta bin, fornecendo um dbpath:
- ./mondod --dbpath < caminho para o dbpath criado logo acima >

> Após a inicialização do MongoDB, execute o comando abaixo para que a aplicação execute as alterações enquanto codifica:
- **npm run watch**

> Para finalizar o comando acima, execute o comando:
- **CRTL + C** - para cancelar

> Faça o download e instalação do Robo3T [-> aqui <-](https://robomongo.org/download)
- O Robo3T funciona como um MySql Workbench para fazer as consultas nos dados guardados no banco

> Quando o MongoDB está funcionando e a aplicação está rodando com o comando **npm run watch** a aplicação pode ser acessada:
- Pelo [-> localhost:3000 <-](http://localhost:3000)

> Para manipular as requisições HTTP, utilize o Postman [-> aqui <-](https://www.getpostman.com/apps)
</br>
> Ou também poderá utilizar a extensão do Chrome [ -> aqui <- ](https://chrome.google.com/webstore/detail/restlet-client-rest-api-t/aejoelaoggembcahagimdiliamlcdmfm)

**Para contribuir com o projeto, siga as instruções abaixo:**
A modificação ou implementação do código poderá ser feita via uma única branch do grupo com as modificações a serem submetidas ao pull request para serem mergiadas a branch master, ou ainda cada aluno poderá codificar em sua própria branch e também submeter a pull request para mergiar na master. O push direto na master foi mantido como fechado para mantermos o controle do código de "produção" funcional na master e a adição das modificações por outras branches para manter uma melhor organização do código.


> Para criar uma nova branch
- git checkout -b < **nome-branch** >
> Para verificar se está na branch que criou
- git status 
> Adicione as modificações com **git add** e comite com o **git commit** e depois dê o push:
- git push origin < **nome-branch** >