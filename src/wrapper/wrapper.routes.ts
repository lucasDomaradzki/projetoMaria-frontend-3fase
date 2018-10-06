import { Request, Response } from "express";
import * as redirect from "../redirect";

export let insertProduct = (req: Request, res: Response) => {
  const obj = {
    operation: "PRODUTO",
    path: "upload/*.csv",
    type: "CARGA",
    crud: "INSERT",
    period: 0,
    pathSave: "src/service/csvFiles/download/saida.csv"
  }

  const chamada = redirect.Redirect(obj)
  res.send(chamada)
}