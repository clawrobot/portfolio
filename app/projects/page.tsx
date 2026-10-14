import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/projects"

export default function Projects(){
    return (
        <div>
            <h1 className="text-3xl text-center">Projects</h1>
            {projects.map((project) => <ProjectCard key={project.id} project={project}/>)}
        </div>
    );
}