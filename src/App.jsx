import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="container mt-3">
        <div className="row justify-content-center">
            <h2 className="text-center">Formulario</h2>
            <div className="col-4">
                <div className="mb-3">
                    <label
                        for="nombre" 
                        className="form-label">
                        Nombre
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombre"
                        placeholder=""/>
                </div>
            </div>
           
            </div>
            <div className="col-4">
                <div className="mb-3">
                    <label
                        for="email" 
                        className="form-label">
                        Email
                    </label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        placeholder="pon tu email"/>
                </div>
            </div>
           
        </div>
    </>
  )
}

export default App
