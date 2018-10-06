import User from "./users.model";
import { Request, Response } from "express";

// get one user
export let getUser = (req: Request, res: Response) => {
  var user = User.findById({ _id: req.params.id }, (err: any, user: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  })
}

// get all users
export let getAllUsers = (req: Request, res: Response) => {
  let users = User.find((err: any, users: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  })
}

// post user
export let addUser = (req: Request, res: Response) => {
  var user = new User(req.body);
  user.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  })
}

// updateUser
export let updateUser = (req: Request, res: Response) => {
  var user = User.findByIdAndUpdate(req.params.id, req.body, (err: any, user: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Atualizado com sucesso");
    }
  });
}

// delete user
export let removeUser = (req: Request, res: Response) => {
  var user = User.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(`Usuário deletado.`);
    }
  })
}