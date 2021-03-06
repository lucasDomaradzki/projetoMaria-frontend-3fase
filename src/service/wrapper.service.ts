import { MARIA_UTIL } from './../common/util';
let child = require('child_process');

export class WrapperService {
    operation: String
    constructor() { }

    async carga(params) {
        console.log(params)
        this.operation = `java -jar ${MARIA_UTIL.pathApiJava} carga -${params.type.substr(0, 1).toLowerCase()} -t ${params.operation.toUpperCase()} ./upload/${params.fileName}`;

        const resultCall = await this.wrapper(this.operation);
        return resultCall;
    }

    async relatory(params) {
        if (params.operation == "ESTATISTICA") {
            this.operation = `java -jar ${MARIA_UTIL.pathApiJava} relatorio -pa ${params.period} -t ${params.operation.toUpperCase()} ./download/${params.fileName}`;
        } else {
            this.operation = `java -jar ${MARIA_UTIL.pathApiJava} relatorio -t ${params.operation.toUpperCase()} ./download/${params.fileName}`;
        }

        const resultCall = await this.wrapper(this.operation);
        return resultCall;
    }

    wrapper(operation) {
        return new Promise((resolve, reject) => {
            child.exec(operation,
                (error, success) => {
                    if (error != null) {
                        console.error(`WRAPPER: Erro ao chamar a classe CallApi: ${error}`);
                        reject(error)
                    }
                    resolve(success)
                })
        })
    }
}