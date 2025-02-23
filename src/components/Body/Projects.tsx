interface ProjectsProps {
    projects: {
        name: string,
        description: string,
        href?: string,
        technologies: string[]
    }[]
}

function Projects({ projects }: ProjectsProps) {
    return (
        <ul className="columns-1 md:columns-2">
            {projects.map((project) => (
                <li className=" break-inside-avoid p-3 mb-2 bg-gray-400/10 hover:bg-gray-700/10 rounded-lg" key={project.name}>
                    <a href={project.href} target="_blank">
                        <h1 className="mb-4 text-xl">{project.name}</h1>
                        <p className="text-gray-300">{project.description}</p>
                        <ul className="flex flex-wrap pt-4 gap-1 text-base">
                            {project.technologies.map((technology) => <li className="px-2 py-px bg-black/30 text-emerald-300 rounded-lg" key={technology}>{technology}</li>)}
                        </ul>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Projects