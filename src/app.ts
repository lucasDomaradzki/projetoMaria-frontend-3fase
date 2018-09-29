import * as express from "express";
import { environment } from "./common/environment";
import * as bodyParser from 'body-parser';
import * as users from "./users/users.routes";
import * as wrapper from "./wrapper/wrapper.routes";

const app = express();
app.set("port", environment.server);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => { res.send("Aplicação funcionando") });

// User section
app.get("/users/:id", users.getUser);
app.get("/users", users.getAllUsers);
app.post("/users", users.addUser);
app.put("/users/:id", users.updateUser);
app.delete("/users/:id", users.removeUser);
app.get("/wrapper", wrapper.insertProduct);

const server = app.listen(environment.server.port, function() {
  console.log("Servidor rodando na porta: ", environment.server.port);
});