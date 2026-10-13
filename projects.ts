export type ProjectImage = {
    src: string;
    alt: string;
};

export type Project = {
    id: string;
    title: string;
    description: string;
    image: ProjectImage;
    longDescription: string;
    images: ProjectImage[];
};

export const projects: Project[] = [
    {
        id: "todo-app",
        title: "To-Do App",
        description: "This is a to-do app that I vibecoded the hell out of.",
        image: {
            src: "/dante.jpg",
            alt: "dante fr",
        },
        longDescription: "This is a to-do app that I vibecoded the hell out of. Lorem ipsum.",
        images: [
            {
                src: "/dante.jpg",
                alt: "dante fr",
            }
        ],
    },
];