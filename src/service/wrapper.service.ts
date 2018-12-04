import { MARIA_UTIL } from './../common/util';
let child = require('child_process');

export class WrapperService {
    operation: String
    constructor() { }

    async carga(params) {
        this.operation = `java -jar ${MARIA_UTIL.pathApiJava} carga -t ${params.operation.toUpperCase()} ./upload/${params.fileName}`;

        const resultCall = await this.wrapper(this.operation);
        return resultCall;
    }

    async relatory(params) {
        if (params.operation == "ESTATISTICA") {
            this.operation = `java -jar ${MARIA_UTIL.pathApiJava} relatorio -pa ${params.period} -t ${params.operation.toUpperCase()} ./download/${params.fileName}`;
        } else {
            this.operation = `java -jar ${MARIA_UTIL.pathApiJava} relatorio -t ${params.operation.toUpperCase()} ./download/${params.fileName}`;
        }
        const resultCall = await this.wrapper(this.operation, 'download');
        return resultCall;
    }

    async JsonData(params) {
        if (params.operation == "ESTATISTICA") {
            this.operation = `java -jar ${MARIA_UTIL.pathApiJava} relatorio -pa  ${params.period} -t ${params.operation.toUpperCase()} -j`;
        } else {
            this.operation = `java -jar ${MARIA_UTIL.pathApiJava} relatorio -t ${params.operation.toUpperCase()} -j`;
        }
        const resultCall = await this.wrapper(this.operation, 'json');
        return resultCall;
    }

    wrapper(operation, type?) {
        return new Promise((resolve, reject) => {
            child.exec(operation,
                (error, success) => {
                    if (error != null) {
                        console.error(`WRAPPER: Erro ao chamar a classe CallApi: ${error}`);
                    }
                    if (type == 'json') {
                        let result = '{"Status' + success.split('{"Status')[1];
                        if (result.substring(11, 16) == "ERROR") {
                            reject(result)
                        } else {
                            resolve(result)
                        }
                    } else {
                        resolve(success);
                    }
                })
        })
    }
}