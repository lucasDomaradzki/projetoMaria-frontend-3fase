import { CallApi } from './callApi';
import { UTIL } from '../../messages';

export class MakingCall {

    private operation: any
    private api = new CallApi()

    constructor() { }

    async typeOfOperation(params) {
        if (params.type == ("CARGA")) {
            return await this.carga(params)
        } else {
            return await this.relatory(params)
        }
    }

    async carga(params) {
        this.operation = "java -jar " + UTIL.path +
            params.type.toLowerCase() + " -" + params.crud.substr(0, 1).toLowerCase() + " -t " + params.operation.toUpperCase() + " " + params.path

        const resultCall = await this.api.call(this.operation)
        return resultCall
    }

    async relatory(params) {
        if (params.type == "ESTATISTICA") {
            this.operation = "java -jar " + UTIL.path +
                params.type.toLowerCase() + " -pa " + params.period + " -t " + params.operation.toUpperCase() + " " + params.pathSave
        } else {
            this.operation = "java -jar " + UTIL.path +
                params.type.toLowerCase() + " -t " + params.operation.toUpperCase() + " " + params.pathSave
        }

        const resultCall = await this.api.call(this.operation);
        return resultCall
    }
}