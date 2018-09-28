import * as express from 'express';
import * as bodyParser from 'body-parser';

import { environment } from '../common/environment';
import * as users from "../users/users.routes";

module.exports = () => {
    let app = express();

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

    return app;
}


/* export const app = () => {
    let app = express();
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



    return app;
} */

/* module.exports = () => {
    let app = express();
    app.set("port", environment.server);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.get("/", (req, res) => { res.send("Aplicação funcionando") });
    return app;
} */