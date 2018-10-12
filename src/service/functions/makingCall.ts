import { CallApi } from './callApi';
import { MARIA_UTIL } from '../../common/util';

export default class RedirectCall {

    private operation: any;
    private api = new CallApi();

    constructor() { }

    async carga(params) {
        this.operation = `java -jar ${MARIA_UTIL.pathApiJava} carga -${params.type.substr(0, 1).toLowerCase()} -t ${params.operation.toUpperCase()} ${MARIA_UTIL.pathCrud}`;

        const resultCall = await this.api.wrapper(this.operation);
        return resultCall + this.operation;
    }

    async relatory(params) {
        if (params.operation == "ESTATISTICA") {
            this.operation = `java -jar ${MARIA_UTIL.pathApiJava} relatorio -pa ${params.period} -t ${params.operation.toUpperCase()} ${MARIA_UTIL.pathSave}`;
        } else {
            this.operation = `java-jar ${MARIA_UTIL.pathApiJava} relatorio -t ${params.operation.toUpperCase()} ${MARIA_UTIL.pathSave}`;
        }

        const resultCall = await this.api.wrapper(this.operation);
        return resultCall;
    }
}