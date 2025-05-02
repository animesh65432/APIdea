import { Call } from "@/service/call"


export const loginwithgoogle = (
    clientId: string, credential: string,) => Call({
        path: "/users/googleauth",
        method: "POST",
        request: {
            clientId,
            credential
        }
    })
export const check = () => Call({
    path: "/check",
    method: "GET"
})