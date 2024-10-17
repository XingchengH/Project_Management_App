import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom"
import Button from "./Button";


const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });
    
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 w-[25rem] text-wrap rounded-sm shadow-sm">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <menu>
                    <Button>{buttonCaption}</Button>
                </menu>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal;