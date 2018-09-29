import { Request, Response } from "express";
import * as redirect from "../redirect";

export let insertProduct = (req: Request, res: Response) => {
  const obj = {
    operation: "PRODUTO",
    path: "src/service/csvFiles/produtos.csv",
    type: "CARGA",
    crud: "INSERT",
    period: 0,
    pathSave: "src/service/csvFiles/saida.csv"
  }

  const chamada = redirect.Redirect(obj)
  res.send(chamada)
}