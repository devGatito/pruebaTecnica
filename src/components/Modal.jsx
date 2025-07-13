import React from "react";

const Modal = ({usuario, onClose}) => {
  return <>
  <div className="fixed inset-0 bg-blue-950 bg-opacity-50 flex items-center justify-center w-full max-w-96 max-h-60 ">
    <div>
        <h1>{usuario.name}</h1>
        <p>{usuario.phone}</p>
        <p>{usuario.company.name}</p>

        <button onClick={onClose} className="bg-red-500">Cerrar</button>
    </div>
  </div>
  
  </>;
};

export default Modal;
