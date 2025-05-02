"use client"
import { useEffect, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "@/components/ui/button"
import { useStore } from "@/store"
import { GoogleAuth } from "@/components"
import axios from "axios"
import config from "@/config"

export default function Home() {
    const { token, addtoken } = useStore()
    const [showLogin, setShowLogin] = useState(true)
    const isLoggedIn = !!token

    const handleUrlChange = (e: any) => {

    }

    const handleGenerateClick = () => {
        if (!isLoggedIn) {
            setShowLogin(false)
        } else {
            console.log("Processing URL:")
        }
    }
    useEffect(() => {
        const check = async () => {
            axios.get(`${config.API_URL}/check`)
        }
        check()
    }, [])

    return (
        <>
            {showLogin &&
                <div className="h-screen flex flex-col justify-end p-6">
                    <div className="flex flex-col gap-4">

                        <div className="flex">
                            <Input
                                onChange={handleUrlChange}
                                placeholder="Please paste the url here"
                                className="placeholder:text-black placeholder:text-center"
                            />
                            <Button onClick={handleGenerateClick}>
                                Generate
                            </Button>
                        </div>
                    </div>
                </div>}
            {!showLogin && <GoogleAuth setShowLogin={setShowLogin} />}
        </>
    )
}