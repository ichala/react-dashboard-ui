import React from 'react';

function Modal({
  children, modalId,
}) {
  return (
    <>

      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box  max-w-5xl">
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
