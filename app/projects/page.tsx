"use client"
import { useState } from "react"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/projects"

export default function Projects(){
    const [id, setId] = useState<string | null>(null)
    return (
        <div>
            <h1 className="text-3xl text-center">Projects</h1>
            {projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={(id) => setId(id)}/>)}
            {id && <p>You clicked {id}</p>}
        </div>
    );
}