import Button from "./Button";

export default function ProjectsSidebar({ onHandleStart, projects, onSelectedProject, selectedProjectId }) {
    return (
        <aside className="w-1/4 px-8 py-16 bg-gray-800 text-white md:w-72 rounded-r-xl">
            <h1 className="text-2xl font-bold p-4 md-text-xl uppercase">Projects</h1>
            <Button onClick={onHandleStart}>Create new project</Button>
            <ul className="pl-5">
                {projects.map((project) => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
                    
                    if (project.id === selectedProjectId) {
                        cssClasses += " bg-gray-700 text-gray-200";
                    } else {
                        cssClasses += " text-stone-400"
                    }

                    return <li key={project.id} className="my-4">
                        <button
                            className={cssClasses}
                            onClick={() => onSelectedProject(project.id)}
                        >
                            {project.title}
                        </button>
                    </li>
                }
                )}
            </ul>
        </aside>
    );
}