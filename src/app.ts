import * as express from 'express';
import * as mongoose from 'mongoose';
import { environment } from './common/environment';
import * as bodyParser from 'body-parser';
import * as users from './users/users.routes';
import * as wrapper from './wrapper/wrapper.routes';
import * as upload from "express-fileupload";
import * as fileUploader from './frontendService/upload.routes';
import { Logger } from './common/logger';

const app = express();
app.set('port', environment.server);
app.use(bodyParser.json());
app.use(upload());
// Allow cors
app.use(function(req, res, next) {
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
app.post('/api/upload', fileUploader.getCsv);

//download e load dos relatorios
app.get('/api/download/:operation', wrapper.downloadFile)
app.get('/api/data/:operation', wrapper.loaderFile)
app.get('/api/download/estimativa:period', wrapper.downloadFile);

//crud
app.get('/api/insert/:operation', wrapper.insertInfo);
app.get('/api/delete/:operation', wrapper.deleteInfo);
app.get('/api/update/:operation', wrapper.updateInfo);

mongoose.connect(environment.db.url, { useNewUrlParser: true }, (err: any) => {
  if (err) {
    Logger.add(Logger.error(`CONEXÃO: Erro: -- ${err.message} -- ao conectar ao mongoose.`));
  } else {
    console.log("Conectado ao Banco de Dados com sucesso.")
  }
})

const server = app.listen(environment.server.port, function() {
  console.log('Servidor rodando na porta: ', environment.server.port);
});