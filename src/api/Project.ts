import { Call } from "@/service/call"

export const generatesideasandprojects = (api: string, auth_token: string) => Call({
    path: "/projects/generates",
    method: "POST",
    request: {
        api
    },
    headers: {
        authorization: auth_token
    }
})

export const Get = (auth_token: string) => Call({
    path: "/projects/get",
    method: "GET",
    headers: {
        authorization: auth_token
    }
})