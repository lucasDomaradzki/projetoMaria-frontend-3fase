import { Logger } from "../../common/logger";
let child = require('child_process');

export class CallApi {

    wrapper(operation) {
        return new Promise((resolve, reject) => {
            child.exec(operation,
                (error, success) => {
                    if (error != null) {
                        Logger.add(Logger.error(`WRAPPER: Erro ao chamar a classe CallApi: ${error}`));
                        reject(error)
                    }
                    resolve(success)
                })
        })
    }
}