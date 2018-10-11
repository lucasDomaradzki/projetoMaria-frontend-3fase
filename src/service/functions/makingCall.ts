import { CallApi } from './callApi';
import { UTIL } from './messages';

export default class RedirectCall {

    private operation: any
    private api = new CallApi()

    constructor() { }

    async carga(params) {
        this.operation = `java -jar ${UTIL.pathApiJava} carga -${params.type.substr(0, 1).toLowerCase()} -t ${params.operation.toUpperCase()} ${UTIL.pathCrud}`

        const resultCall = await this.api.wrapper(this.operation)
        return resultCall + this.operation
    }

    async relatory(params) {
        if (params.operation == "ESTATISTICA") {
            this.operation = `java -jar ${UTIL.pathApiJava} relatorio -pa ${params.period} -t ${params.operation.toUpperCase()} ${UTIL.pathSave}`
        } else {
            this.operation = `java-jar ${UTIL.pathApiJava} relatorio -t ${params.operation.toUpperCase()} ${UTIL.pathSave}`
        }

        const resultCall = await this.api.wrapper(this.operation);
        return resultCall
    }
}