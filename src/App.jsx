import React from 'react';
import Navbar from './components/Navbar';
import React, { useState } from 'react';



const App = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [comentarios, setComentarios] = useState("")

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row justify-content-center">
          <h2 className="text-center">Formulario</h2>
          <div className="col-4">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="nombre"
                placeholder="Ingresa tu nombre"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input 
                type="email" 
                className="form-control" 
                id="email"
                placeholder="Ingresa tu correo"
              />
            </div>
          </div>
          <div className="col-8">
            <div className="mb-3">
              <label htmlFor="comentarios" className="form-label">
                Comentarios
              </label>
              <textarea
                className="form-control"
                id="comentarios"
                rows="4"
                placeholder="Escribe tus comentarios aquí"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-5">
                <button 
                    type="button" 
                    onclick="agregarFuncion()"
                    className="btn btn-primary w-100">
                    Publicar</button>
            </div>
        </div>
      </div>
      
      
    </>
  );
};

export default App;