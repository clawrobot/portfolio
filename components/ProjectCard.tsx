import Image from "next/image"
import { Project } from "@/projects"

export default function ProjectCard({ project, onOpen }: {project: Project; onOpen: (id: string)=>void}){
    return (
        <button className="flex items-center gap-5 p-3 border-2 border-gray-500 m-5 rounded-md text-left" onClick={() => onOpen(project.id)}>
            <span className="block">
                <span className="text-xl block">{project.title}</span>
                <span className="mt-3 block">{project.description}</span>
            </span>
            <Image className="shrink-0 object-cover rounded-md" src={project.image.src} alt={project.image.alt} width={200} height={120}/>
        </button>
    );
}