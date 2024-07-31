import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose, onAction, actionText }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} onClose={onClose}>
      {open ? children : null}
      <div className="modal-actions">
        <button className="text-button" onClick={onClose}>Close</button>
        <button className="button" onClick={onAction}>{actionText}</button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
