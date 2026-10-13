import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/projects"

export default function Projects(){
    return (
        <div>
            {projects.map((project) => <ProjectCard key={project.id} project={project}/>)}
        </div>
    );
}