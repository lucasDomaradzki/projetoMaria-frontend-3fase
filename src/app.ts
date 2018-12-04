import { RoutesWrapper } from './wrapper/routesWrapper';
import * as express from 'express';
import * as mongoose from 'mongoose';
import { environment } from './common/environment';
import * as bodyParser from 'body-parser';
import * as users from './users/users.routes';
import * as upload from "express-fileupload";

const routesWrapper = new RoutesWrapper()

const app = express();
app.set('port', environment.server);
app.use(bodyParser.json());
app.use(upload());
// Allow cors
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// Alow cors
app.use(bodyParser.urlencoded({
  extended: true
}));

/**
 * Endpoint / inicial para verificação se a aplicação funciona
 */
app.get('/', (req, res) => { res.send('Aplicação funcionando') });

// User section
app.get('/users/:id', users.getUser);
app.get('/users', users.getAllUsers);
app.post('/users', users.addUser);
app.put('/users/:id', users.updateUser);
app.delete('/users/:id', users.removeUser);

//dowload, load e upsert
app.get('/api/download/:operation', routesWrapper.downloadFile)
app.get('/api/data/:operation', routesWrapper.loaderFileJSON)
app.get('/api/download/estimativa:period', routesWrapper.downloadFile);
app.post('/api/upsert/:operation', routesWrapper.upsertInfo);

mongoose.connect(environment.db.url, { useNewUrlParser: true }, (err: any) => {
  if (err) {
    console.error(`CONEXÃO: Erro: -- ${err.message} -- ao conectar ao mongoose.`);
  } else {
    console.log("Conectado ao Banco de Dados com sucesso.")
  }
})

app.listen(environment.server.port, () => {
  console.log('Servidor rodando na porta: ', environment.server.port);
});