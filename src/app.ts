import { Server } from './server/server';
import { usersRouter } from './users/users.router';

const server = new Server();
server.bootstrap([
  usersRouter
]).then(server => {
  console.log('Servidor na porta:', server.application.address());
}).catch(error => {
  console.log('Servidor falhou ao iniciar');
  console.error(error);
  process.exit(1);
})
