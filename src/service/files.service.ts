import moment = require("moment");

export class FilesService {

    constructor() { }

    uploadCsv = (sendFile) => {
        const now = moment().format("DD-MM-YYYY-HH:mm:ss");
        const uploadFile = new Promise((resolve, reject) => {

            if (sendFile.files && sendFile.files.file.mimetype == 'text/csv') {
                const file = sendFile.files.file;
                const originalName = file.name;
                const newfileName = `${now}.csv`;

                file.mv("./upload/" + newfileName, (err) => {
                    if (err) {~
                        console.error(`FRONTEND-SERVICE: Falha ao receber o upload do arquivo.`);
                        reject(`Erro ao carregar o arquivo ${originalName}.`)

                    } else {
                        console.error(`FRONTEND-SERVICE: Arquivo ${newfileName} carregado com sucesso.`);
                        resolve(newfileName)
                    }
                });
            } else {
                console.error(`FRONTEND-SERVICE: Arquivo não compatível.`);
                reject("Arquivo enviado não compatível. Envie arquivos .csv");
            }
        })

        return uploadFile;
    }
}