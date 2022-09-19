import React, { useState } from 'react'

export const Form = (props) => {
    const {handleAddItem} = props

    
    
    const [descripcion, agregarDescripcion] = useState("");
    const handleSubmit = e => {
        e.preventDefault() //Evitar que se refresque la página
        console.log(descripcion)
        handleAddItem({ /* Recibe de props el método al que mandamos el nuevo registro */
            done:false,
            id: (+new Date()).toString(),descripcion
        })
        agregarDescripcion("") //Limpiar el estado
    }
    
  return (
    <form onSubmit={handleSubmit}> 
    {/* Cuando da enter o imput se debe ejeuctar el método handleSubmit */}
        <div className="to-do-list">
          <input
            type="text"
            className="tarea"
            value={descripcion} //Asignar descripción a input
            onChange={e => agregarDescripcion(e.target.value)}
          />
          <button
            className="button_add"
            disabled={descripcion ? "" : "disabled"} //Si descripción no tiene valor se deshabilita, si lo tiene lo habilita
          >
            Agregar
          </button>
          
          
      </div>
    </form>
    

  )
}
