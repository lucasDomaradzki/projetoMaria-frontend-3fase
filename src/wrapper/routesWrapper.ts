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
        res.download(`./download/${operation.fileName}`)
      }).catch((reject) => {
        res.send(reject);
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
            res.send(jsonObj);
          })
      }).catch((reject) => {
        console.error(`WRAPPER: Erro ao chamar o serviço loaderFile: ${reject}`);
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
            res.send(resolve);
          }).catch((reject) => {
            console.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`);
          })
      }).catch((reject) => {
        console.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`);
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
            res.send(resolve);
          }).catch((reject) => {
            console.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`);
          })
      }).catch((reject) => {
        console.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`);
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
            res.send(resolve);
          }).catch((reject) => {
            res.send(reject);
            console.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`);
          })
      }).catch((reject) => {
        console.error(`WRAPPER: Erro ao chamar o serviço insertInfo: ${reject}`);
      })
  }
}

