import React from "react";

const Modal = ({ usuario, onClose }) => {

    
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50  backdrop-blur-sm "> 
        <div className=" bg-[#2B2D42] w-1/2 h-1/2 flex items-center justify-center text-gray-100 shadow-xl shadow-black/30 rounded-3xl">

          <div className=" p-6 rounded  w-full max-w-sm text-center">
            <h1 className="text-xl font-bold mb-2">{usuario.name}</h1>
            <p className="mb-1">{usuario.phone}</p>
            <p className="mb-4">{usuario.company.name}</p>

            <button
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 h-10 w-30"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
