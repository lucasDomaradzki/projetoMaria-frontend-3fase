import { WrapperService } from './../service/wrapper.service';
import { FilesService } from '../service/files.service';
import { Request, Response } from 'express';

const csv = require('csvtojson');
import moment = require("moment");

export class RoutesWrapper {
  constructor(
    private filesService = new FilesService(),
    private wrapperService = new WrapperService()
  ) { }

  downloadFile = (req: Request, res: Response) => {
    const operation = req.params;
    operation.fileName = `${moment().format("DD-MM-YYYY-HH:mm:ss")}.csv`;

    const result = this.wrapperService.relatory(operation)
      .then((resolve) => {
        res.status(200).download(`./download/${operation.fileName}`);
      }).catch((reject) => {
        console.error(`WRAPPER: Erro ao chamar o serviço downloadFile: ${reject}`);
        res.status(400).send(reject);
      })
    return result;
  }

  loaderFileJSON = (req: Request, res: Response) => {
    const operation = req.params;
    operation.json = true;
    const result = this.wrapperService.JsonData(operation)
      .then((resolve) => {
        res.status(200).send(resolve);
      }).catch((reject) => {
        console.error(`WRAPPER: Erro ao chamar o serviço JSON: ${reject}`);
        res.status(400).send(reject);
      })
    return result;
  }
  
  upsertInfo = (req: Request, res: Response) => {
    const operation: any = {};
    operation.operation = req.params.operation;

    this.filesService.uploadCsv(req)
      .then((resolve) => {
        operation.fileName = resolve;
        this.wrapperService.carga(operation)
          .then((resolve) => {
            res.status(200).send(resolve);
          }).catch((reject) => {
            res.send(reject);
            console.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`);
          })
      }).catch((reject) => {
        res.status(400).send(reject);
        console.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`);
      })
  }
}

