let child = require('child_process');

export class CallApi {

    constructor() { }

    call(operation) {
        return new Promise((resolve, reject) => {
            child.exec(operation,
                (error, success) => {
                    if (error != null) {
                        console.log(error)
                        reject(error)
                    }
                    resolve(success)
                })
        })
    }
}