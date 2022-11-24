import React from 'react';

function Modal({
  btnTitle, btnIcon, children,
}) {
  return (
    <>
      <label htmlFor="modal-box-content" type="button" className="btn btn-primary btn-sm gap-2">
        {btnIcon}
        {btnTitle}
      </label>
      <input type="checkbox" id="modal-box-content" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box  max-w-5xl">
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
