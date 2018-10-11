import { WrapperService } from './../service/wrapper.service';
import { Request, Response } from "express";
import * as _ from 'lodash'
const del = require('del');
const csv = require('csvtojson')
const wrapperService = new WrapperService()

export let callApiJava = (req: Request, res: Response) => {
  const params = {
    operation: "PRODUTO",
    type: "RELATORIO",
    crud: "INSERT",
    period: 0
  }

  wrapperService.crudApi(params)
    .then((resolve) => {
      res.send(resolve)
    }).catch((reject) => {
      console.log(reject)
    })
}

export let downloadFile = (req: Request, res: Response) => {
  const operation = req.params;

  wrapperService.fileDownload(operation)
    .then((resolve) => {
      res.download("/home/daniel/Documentos/faculdade/web/projetoMaria-frontend-3fase/src/download/teste.csv")
      setTimeout(() => {
        del.sync(['/home/daniel/Documentos/faculdade/web/projetoMaria-frontend-3fase/src/download/data.csv']);
      }, 1000)
    }).catch((reject) => {
      console.log(reject)
    })
}

export let loaderFile = (req: Request, res: Response) => {
  const operation = req.params;
  const csvFilePath = '/home/daniel/Documentos/faculdade/web/projetoMaria-frontend-3fase/src/download/teste.csv'

  wrapperService.fileDownload(operation)
    .then((resolve) => {
      csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
          res.send(jsonObj)
          setTimeout(() => {
            del.sync(['/home/daniel/Documentos/faculdade/web/projetoMaria-frontend-3fase/src/download/data.csv']);
          }, 1000)
        })
    }).catch((reject) => {
      console.error(reject)
    })
}

export let deleteInfo = (req: Request, res: Response) => {
  const operation: any = {}
  operation.operation = req.params.operation;
  operation.type = "delete"

  wrapperService.crudApi(operation)
    .then((resolve) => {
      res.send(resolve)
    }).catch((reject) => {
      console.error(reject)
    })
}

export let updateInfo = (req: Request, res: Response) => {
  const operation: any = {}
  operation.operation = req.params.operation;
  operation.type = "update"

  wrapperService.crudApi(operation)
    .then((resolve) => {
      res.send(resolve)
    }).catch((reject) => {
      console.error(reject)
    })
}

export let insertInfo = (req: Request, res: Response) => {
  const operation: any = {}
  operation.operation = req.params.operation;
  operation.type = "insert"

  wrapperService.crudApi(operation)
    .then((resolve) => {
      res.send(resolve)
    }).catch((reject) => {
      console.error(reject)
    })
}