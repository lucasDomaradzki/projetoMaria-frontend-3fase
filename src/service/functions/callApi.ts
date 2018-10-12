let child = require('child_process');

export class CallApi {

    wrapper(operation) {
        return new Promise((resolve, reject) => {
            child.exec(operation,
                (error, success) => {
                    if (error != null) {
                        console.error(error)
                        reject(error)
                    }
                    resolve(success)
                })
        })
    }
}