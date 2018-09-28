let app = require('./config/express')();

app.listen(3000, () => console.log('Servidor rodando'));

/* const server = app.listen(environment.server.port, function () {
  console.log("Servidor rodando na porta: ", environment.server.port);
}); */