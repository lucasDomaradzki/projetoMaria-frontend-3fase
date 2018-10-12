import { Logger } from "../common/logger";

/**
 * @author lucasDomaradzki
 * Essa função é chamada pelo endpoint /api/upload no app.js
 * Salva/mv o arquivo do front-end na chamada do endpoint
 * na pasta ./upload para ser processado pelo wrapper
 * 
 * @param req Requisição do endpoint /api/upload
 * @param res Response do endpoint /api/upload
 */
export let getCsv = function(req, res) {

  if (req.files && req.files.file.mimetype == "text/csv") {
    const file = req.files.file;
    const originalName = file.name;
    const fileName = new Date().getDay() + "-" + new Date().getMonth() + "-" + new Date().getFullYear() + "-"
     + new Date().getMinutes() + "-" + new Date().getMilliseconds() + ".csv";

    file.mv("./upload/"+fileName, function(err) {
      if (err) {
        Logger.add(Logger.error(`FRONTEND-SERVICE: Falha ao receber o upload do arquivo.`));
        res.status(400).send(`Erro ao carregar o arquivo ${originalName}.`).end();
      } else {
        Logger.add(Logger.error(`FRONTEND-SERVICE: Arquivo ${fileName} carregado com sucesso.`));
        res.status(200).send(`Arquivo ${originalName} carregado com sucesso.`).end();
      }
    });
  } else {
    Logger.add(Logger.error(`FRONTEND-SERVICE: Arquivo não compatível.`));
    res.status(400).send("Arquivo enviado não compatível. Envie arquivos .csv").end();
  }

}