import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { GoogleLogin, CredentialResponse } from "@react-oauth/google"
import { loginwithgoogle } from "@/api/Users"
import { useStore } from "@/store"
import React from "react"

type Props = {
    setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export default function GoogleAuth({ setShowLogin }: Props) {
    const { addtoken } = useStore()
    const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
        try {
            const res = await loginwithgoogle(credentialResponse.clientId as string, credentialResponse.credential as string) as { message: string, token: string }
            addtoken(res.token)
            setShowLogin(true)
        }
        catch {
            setShowLogin(false)
        }
    }
    return (
        <div className="h-screen flex justify-center items-center">
            <Card className="w-[90vw] max-w-md shadow-xl rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-gray-800 dark:text-white">
                        Sign in with Google
                    </CardTitle>
                    <CardDescription className="text-center text-gray-500 dark:text-gray-300">
                        Access your account using your Google credentials
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center py-6">
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            handleLoginSuccess(credentialResponse)
                        }}
                    />
                </CardContent>
                <CardFooter className="justify-center text-sm text-gray-400 dark:text-gray-500">
                    We do not store your personal data.
                </CardFooter>
            </Card>
        </div>
    )
}
