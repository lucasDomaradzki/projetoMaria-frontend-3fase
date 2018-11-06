import { WrapperService } from './../service/wrapper.service';
import { FilesService } from '../service/files.service';
import { Request, Response } from 'express';
import { Logger } from '../common/logger';

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
        Logger.add(Logger.error(`WRAPPER: Erro ao chamar o serviço downloadFile: ${reject}`));
        res.status(400).send(reject);
      })
    return result;
  }

  loaderFile = (req: Request, res: Response) => {
    const operation = req.params;
    operation.fileName = `${moment().format("DD-MM-YYYY-HH:mm:ss")}.csv`;

    return this.wrapperService.relatory(operation)
      .then((resolve) => {
        csv()
          .fromFile(`./download/${operation.fileName}`)
          .then((jsonObj) => {
            res.status(200).send(jsonObj);
          })
      }).catch((reject) => {
        Logger.add(Logger.error(`WRAPPER: Erro ao chamar o serviço loaderFile: ${reject}`));
        res.status(400).send(reject);
      })
  }

  deleteInfo = (req: Request, res: Response) => {
    const operation: any = {}
    operation.operation = req.params.operation;
    operation.type = "delete"

    this.filesService.uploadCsv(req)
      .then((resolve) => {
        operation.fileName = resolve;
        this.wrapperService.carga(operation)
          .then((resolve) => {
            res.status(200).send(resolve);
          }).catch((reject) => {
            Logger.add(Logger.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`));
          })
      }).catch((reject) => {
        Logger.add(Logger.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`));
        res.status(400).send(reject);
      })
  }

  updateInfo = (req: Request, res: Response) => {
    const operation: any = {};
    operation.operation = req.params.operation;
    operation.type = "update";

    this.filesService.uploadCsv(req)
      .then((resolve) => {
        operation.fileName = resolve;
        this.wrapperService.carga(operation)
          .then((resolve) => {
            res.status(200).send(resolve);
          }).catch((reject) => {
            Logger.add(Logger.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`));
          })
      }).catch((reject) => {
        Logger.add(Logger.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`));
        res.status(400).send(reject);
      })
  }

  insertInfo = (req: Request, res: Response) => {
    const operation: any = {};
    operation.operation = req.params.operation;
    operation.type = "insert";

    this.filesService.uploadCsv(req)
      .then((resolve) => {
        operation.fileName = resolve;
        this.wrapperService.carga(operation)
          .then((resolve) => {
            res.status(200).send(resolve);
          }).catch((reject) => {
            res.send(reject)
            Logger.add(Logger.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`));
          })
      }).catch((reject) => {
        Logger.add(Logger.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`));
        res.status(400).send(reject);
      })
  }
}

