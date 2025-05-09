import { ReactNode } from "react"
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'


type Props = {
    children: ReactNode
}
export default function QueryclientProvider({ children }: Props) {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
