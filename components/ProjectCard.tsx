import Image from "next/image"
import { Project } from "@/projects"

export default function ProjectCard({ project }: {project: Project}){
    return (
        <div className="flex items-center gap-5 p-3 border-2 border-gray-500 m-5 rounded-md">
            <div>
                <h2 className="text-xl">{project.title}</h2>
                <p className="mt-3">{project.description}</p>
            </div>
            <Image className="shrink-0 object-cover rounded-md" src={project.image.src} alt={project.image.alt} width={200} height={120}/>
        </div>
    );
}