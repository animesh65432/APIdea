import config from "@/config"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export default function GoogleProvider({ children }: Props) {
    return (
        <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID as string}>
            {children}
        </GoogleOAuthProvider>
    )
}
