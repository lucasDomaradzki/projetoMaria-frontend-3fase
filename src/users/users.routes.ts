import User from "./users.model";
import { Request, Response } from "express";
import { Logger } from "../common/logger";

// get one user
export let getUser = (req: Request, res: Response) => {
  var user = User.findById({ _id: req.params.id }, (err: any, user: any) => {
    if (!user) {
      Logger.add(Logger.error(`REQUISIÇÃO: Usuário -- ${req.params.id} -- não encontrado`));
      res.status(401).send(`Usuário não cadastrado no sistema.`).end();
    } else {
      Logger.add(Logger.info(`REQUISIÇÃO: Usuário -- ${req.params.id} -- encontrado`));
      res.status(200).send(user).end();
    }
  })
}

// get all users
export let getAllUsers = (req: Request, res: Response) => {
  let users = User.find((err: any, users: any) => {
    if (!users) {
      Logger.add(Logger.error(`REQUISIÇÃO: Falha ao buscar os registros dos usuários do sistema.`));
      res.status(500).send(`Falha ao buscar os registros.`).end();
    } else {
      Logger.add(Logger.warn(`REQUISIÇÃO: Solicitação dos registros dos usuários do sistema.`));
      res.status(200).send(users).end();
    }
  })
}

// post user
export let addUser = (req: Request, res: Response) => {
  var user = new User(req.body);
  user.save((err: any) => {
    if (!user) {
      Logger.add(Logger.error(`REQUISIÇÃO: Informações para cadastro insuficientes ou incorretas.`));
      res.status(400).send(`Informações para cadastro insuficientes ou incorretas.`).end();
    } else {
      Logger.add(Logger.info(`REQUISIÇÃO: Usuário -- ${user} -- registrado.`));
      res.status(200).send(`Usuário -- ${user} -- registrado.`).end();
    }
  })
}

// updateUser
export let updateUser = (req: Request, res: Response) => {
  var user = User.findByIdAndUpdate(req.params.id, req.body, (err: any, user: any) => {
    if (!user) {
      Logger.add(Logger.error(`REQUISIÇÃO: Informações para atualização insuficientes ou incorretas.`));
      res.status(400).send(`Informações para cadastro insuficientes ou incorretas.`).end();
    } else {
      Logger.add(Logger.info(`REQUISIÇÃO: Usuário -- ${user} -- atualizado.`));
      res.status(200).send(`Usuário -- ${user} -- atualizado.`).end();
    }
  });
}

// delete user
export let removeUser = (req: Request, res: Response) => {
  var user = User.deleteOne({ _id: req.params.id }, (err: any) => {
    if (!user) {
      Logger.add(Logger.error(`REQUISIÇÃO: Informações ou credencial incorreta.`));
      res.status(400).send(`Informações para cadastro insuficientes ou incorretas.`).end();
    } else {
      Logger.add(Logger.warn(`REQUISIÇÃO: Usuário -- ${user} -- excluído do sistema.`));
      res.status(200).send(`Usuário -- ${user} -- excluído do sistema.`).end();
    }
  })
}