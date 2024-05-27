import Navbar from './components/Navbar';
// Llamar a useState en el nivel superior de nuestro componente para declarar una variable 
import React, { useState } from 'react';



const App = () => {
// Parametros para obtener los datos 
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [comentarios, setComentarios] = useState("")
// función para enviar los datos con el botón 
  const send = () => {
    const imprimirDatos = {
      nombre: nombre,
      email: email,
      comentarios:comentarios
    };
    console.log(imprimirDatos)
    limpiarForm();
  };
// función para limpar el formulario cada vez que se mandan los datos
  const limpiarForm = () => {
    document.getElementById("Coment").reset();
  }

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row justify-content-center">
          <h2 className="text-center">Formulario</h2>
          {/* //Aquí empieza el formulario */}
          <form action="" id='Coment'>
          <div className="row justify-content-center">
          <div className="col-4">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                onChange={(e) => setNombre(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo"
              />
            </div>
          </div>
          <div className="col-8">
            <div className="mb-3">
              <label
                htmlFor="comentarios"
                className="form-label">
                Comentarios
              </label>
              <textarea
                className="form-control"
                id="comentarios"
                rows="4"
                // Se activa cuando se hace el cambio de dato insertado
                onChange={(e) => setComentarios(e.target.value)}
              ></textarea>
            </div>
          </div>
          </div>
          </form>
        </div>
        <div className="row justify-content-center">
          <div className="col-5">
            <button
              type="button"
              className="btn btn-primary w-100"
              // Se dispara cuando se hace clic en el botón 
              onClick={send}>
              Publicar
            </button>
          </div>
        </div>
      </div>


    </>
  );
};

export default App;