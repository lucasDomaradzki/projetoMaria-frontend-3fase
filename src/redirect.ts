import { MakingCall } from './service/functions/makingCall';


export async function Redirect(obj) {
    try {
        const makingCall = new MakingCall()
        const statusCall = await makingCall.typeOfOperation(obj);
        console.log(statusCall)
        return statusCall;
    } catch (err) {
        console.log(err)
    }
}