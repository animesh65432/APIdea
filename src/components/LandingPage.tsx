import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code2, Compass, Database, Layers, Lightbulb, Rocket, Zap } from "lucide-react"
import { Mermaid } from "@/components"

export default function LandingPage() {
    const chart1 = `
flowchart TD
  A["User Enters Idea or URL"] --> B["Content Analyzer"]
  B --> C["Generate API Suggestions"]
  C --> D["Create Visual Flow"]
  D --> E["Display Mermaid Chart"]
`;
    const chart2 = `
flowchart TD
  A["Paste API Endpoint"] --> B["API Analyzer"]
  B --> C["Extract Logic"]
  C --> D["Build Flow Diagram"]
  D --> E["Render with Mermaid.js"]
`;


    return (
        <div className="flex min-h-[100dvh] flex-col">
            <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b sticky top-0 z-10  bg-background/80 backdrop-blur-md">
                <Link href="/" className="flex items-center gap-2">
                    <Code2 className="h-6 w-6 text-primary" />
                    <span className="font-bold text-xl">APIIdea</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                    <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
                        How It Works
                    </Link>


                </nav>
                <div className="flex gap-4">
                    <Link href="/home">
                        <Button>Get Started</Button>
                    </Link>
                </div>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Discover What You Can Build With Any API
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        APIIdea helps developers explore possibilities, generate project ideas, and understand the full
                                        potential of any API.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link href="/home">
                                        <Button size="lg" className="gap-1">
                                            <Compass className="h-4 w-4" />
                                            Start Exploring
                                        </Button>
                                    </Link>
                                    <Link href="/home">
                                        <Button size="lg" variant="outline">
                                            Watch Demo
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-f">
                                <div className=" w-full h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] rounded-lg  border shadow-xl flex justify-center items-center">
                                    <Mermaid chart={chart1} />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold">
                                    <Rocket className="mr-1 h-3.5 w-3.5" />
                                    Features
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock API Potential</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    APIIdea provides powerful tools to help you understand and leverage any API to its fullest.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                                    <Lightbulb className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold">Idea Generation</h3>
                                <p className="text-center text-muted-foreground">
                                    Get instant project ideas based on API capabilities and your specific requirements.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                                    <Layers className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold">API Visualization</h3>
                                <p className="text-center text-muted-foreground">
                                    See visual representations of API endpoints, relationships, and potential use cases.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                                    <Database className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold">API Library</h3>
                                <p className="text-center text-muted-foreground">
                                    Access our extensive library of popular APIs with pre-analyzed capabilities and examples.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold">
                                    <Zap className="mr-1 h-3.5 w-3.5" />
                                    How It Works
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple Yet Powerful</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    APIIdea makes it easy to go from API documentation to project inspiration in minutes.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <div className="flex items-center justify-center">
                                <div className=" w-full h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] rounded-lg  border shadow-xl flex justify-center items-center">
                                    <Mermaid chart={chart2} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li className="flex items-start gap-4">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                            1
                                        </div>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Input API Details</h3>
                                            <p className="text-muted-foreground">
                                                Paste an API URL, upload documentation, or select from our library.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                            2
                                        </div>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Analyze Capabilities</h3>
                                            <p className="text-muted-foreground">
                                                Our AI analyzes the API to understand its full capabilities and potential use cases.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                            3
                                        </div>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Explore Ideas</h3>
                                            <p className="text-muted-foreground">
                                                Browse generated project ideas, examples, and implementation suggestions.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Explore API Possibilities?</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join thousands of developers who are discovering new ways to use APIs every day.
                                </p>
                            </div>
                            <div className="mx-auto w-full max-w-sm space-y-2">
                                <form className="flex flex-col sm:flex-row gap-2">
                                    <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                                    <Button type="submit">Get Started</Button>
                                </form>
                                <p className="text-xs text-muted-foreground">
                                    Start your free trial. No credit card required.{" "}
                                    <Link href="/terms" className="underline underline-offset-2">
                                        Terms & Conditions
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <div className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    <span className="font-semibold">APIIdea</span>
                </div>
                <p className="text-xs text-muted-foreground sm:ml-4">
                    &copy; {new Date().getFullYear()} APIIdea. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4">
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4">
                        Privacy
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4">
                        About
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4">
                        Contact
                    </Link>
                </nav>
            </footer>
        </div >
    )
}
