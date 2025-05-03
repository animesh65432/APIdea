import { ProjectsTypes } from "@/types"
import Project from "./Project"
type Props = {
    projects: ProjectsTypes[]
}
export default function Projects({ projects }: Props) {
    return (
        <div className="mb-3">
            {projects.map((project) => <Project project={project} key={project.name} />)}
        </div>
    )
}
