import NewTask from "./NewTask"

export default function Tasks({ onAdd, onDelete, tasks }) {
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAdd={onAdd} />
        {tasks.length === 0 && <p className="text-stone-800 my-4">
            This project doesn't have any tasks yet. Click the button above to add a new task.
        </p>}
        {tasks.length > 0 && <ul className="p-4 mt-8 rounded-sm bg-stone-100">
            {tasks.map((task) => <li key={task.id} className="flex justify-between pt-4 border-b border-gray-300 last:mb-4">
                <span>{task.text}</span>
                <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>Delete</button>
            </li>)}
        </ul>
        }
    </section>
}