import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal"

export default function NewProject({ onAddProject, onCancelProject }) {
    const modal = useRef();
    const enteredTitle = useRef();
    const enteredDescription = useRef();
    const enteredDueDate = useRef();

    function handleSave() {
        const data = {
            title: enteredTitle.current.value,
            description: enteredDescription.current.value,
            dueDate: enteredDueDate.current.value,
        };

        // validate data
        if (data.title.trim().length === 0 || data.description.trim().length === 0 || data.dueDate.trim().length === 0) {
            modal.current.open();
            return;
        }
        // save data
        onAddProject(data);
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
                <p className="text-stone-400 mb-4">Please enter valid data.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button
                            className="text-stone-800 hover:text-stone-950"
                            onClick={onCancelProject}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className="px-6 py-2 bg-stone-900 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}>
                            Save
                        </button>
                    </li>
                </menu>
                <div>

                    <Input ref={enteredTitle} type="text" label="Title" />
                    <Input ref={enteredDescription} label="Description" isTextArea />
                    <Input ref={enteredDueDate} type="date" label="Due Date" />
                </div>
            </div>

        </>
    );
}