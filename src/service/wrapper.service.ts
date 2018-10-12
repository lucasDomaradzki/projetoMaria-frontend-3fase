import RedirectCall from "./functions/makingCall";

export class WrapperService {

    private redirectCall = new RedirectCall()

    constructor() { }

    async crudApi(params) {
        try {
            const result = await this.redirectCall.carga(params)
            return result
        } catch (err) {
            console.log(err)
        }
    }

    fileDownload(params: Object) {
        try {
            const resolve = this.redirectCall.relatory(params)
            return resolve
        } catch (err) {
            console.log(err)
        }
    }
}