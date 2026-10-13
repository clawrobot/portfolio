import Image from "next/image"
import { Project } from "@/projects"

export default function ProjectCard({ project }: {project: Project}){
    return (
        <div>
            <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
            <Image src={project.image.src} alt={project.image.alt} width={300} height={300}/>
        </div>
    );
}