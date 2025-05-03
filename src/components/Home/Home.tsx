"use client"
import { useState } from "react"
import { useStore, } from "@/store"
import { GoogleAuth } from "@/components"
import { generatesideasandprojects } from "@/api/Project"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input"
import { validateApiUrl } from "@/utils/check"
import { toast, ToastContainer } from "react-toastify"
import { ProjectsTypes } from "@/types"
import Projects from "./Projects"
import { Code, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Home() {
    const { token, removetoken } = useStore()
    const [showLogin, setShowLogin] = useState(true)
    const [api, setapi] = useState("")
    const [project, setproject] = useState<ProjectsTypes[]>()
    const [loading, setloading] = useState<boolean>(false)
    const isLoggedIn = !!token
    const navigate = useRouter()

    const placeholders = [
        "Paste a public API URL (e.g., https://api.spacexdata.com)",
        "Paste a weather API URL",
        "Paste a cryptocurrency API endpoint",
        "Paste a REST API link to get project ideas",
        "Drop any API endpoint to generate code and diagrams",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setapi(e.target.value)
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isLoggedIn && token === "") {
            setShowLogin(false)
            return
        }

        try {
            setloading(true)
            setproject([])
            const checkurl = await validateApiUrl(api);

            if (!checkurl) {
                toast.error("It's not a valid URL or it's unreachable.");
                return;
            }
            else {
                const res = await generatesideasandprojects(api, token) as ProjectsTypes[]
                setproject(res)
            }
        } finally {
            setloading(false)
        }
    };

    const onlogout = () => {
        console.log("click")
        setShowLogin(false)
        removetoken()
        navigate.push("/")
    }

    return (
        <>
            {showLogin ? (
                <div className="min-h-screen bg-slate-50 flex flex-col">

                    <header className="flex sticky top-0 z-50 bg-background/80 backdrop-blur-md items-center justify-between p-4 border-b border-slate-200  shadow-sm">
                        <div className="flex items-center space-x-2">
                            <Code className="h-6 w-6 text-indigo-600" />
                            <h1 className="text-xl font-bold text-slate-800">API Project Generator</h1>
                        </div>
                        {isLoggedIn && (
                            <button
                                onClick={onlogout}
                                className="flex items-center space-x-1 text-slate-600 hover:text-slate-900 transition-colors p-2 rounded-md hover:bg-slate-100"
                            >
                                <span className="text-sm font-medium">Sign Out</span>
                            </button>
                        )}
                    </header>

                    <main className="flex-1 flex flex-col p-4 md:p-6 max-w-7xl mx-auto w-full">

                        {!project?.length && !loading && (
                            <div className="flex-1 flex flex-col items-center justify-center text-center mb-8">
                                <div className="bg-indigo-50 p-8 rounded-lg mb-8 max-w-md w-full">
                                    <h2 className="text-2xl font-bold text-slate-800 mb-3">Generate Project Ideas</h2>
                                    <p className="text-slate-600 mb-4">
                                        Enter an API URL below to automatically generate project ideas,
                                        starter code and architecture diagrams.
                                    </p>
                                    <div className="flex justify-center">
                                        <Code className="h-16 w-16 text-indigo-500 opacity-80" />
                                    </div>
                                </div>
                            </div>
                        )}


                        {loading && (
                            <div className="flex-1 flex flex-col items-center justify-center">
                                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                    <Loader2 className="h-12 w-12 mx-auto mb-4 text-indigo-600 animate-spin" />
                                    <h3 className="text-lg font-medium text-slate-800">Generating projects...</h3>
                                    <p className="text-slate-600 mt-2">This might take a few moments</p>
                                </div>
                            </div>
                        )}


                        {project?.length === 3 && (
                            <div className="">
                                <Projects projects={project} />
                            </div>
                        )}


                        <div className="sticky bottom-0 pt-4 bg-slate-50 border-t border-slate-200 mt-auto">
                            <PlaceholdersAndVanishInput
                                placeholders={placeholders}
                                onChange={handleChange}
                                onSubmit={onSubmit}
                                loading={loading}
                            />
                            <p className="text-xs text-slate-500 mt-2 text-center">
                                Enter any public API URL to generate project ideas
                            </p>
                        </div>
                    </main>
                </div>
            ) : (
                <GoogleAuth setShowLogin={setShowLogin} />
            )}
            <ToastContainer position="bottom-right" theme="colored" />
        </>
    )
}