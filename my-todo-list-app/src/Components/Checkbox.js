import React from 'react'

export const Checkbox = (props) => { //Recibe data y método onChange
    const { 
        onChange,
        data: {id, descripcion, done} //Desestructurar
    } = props
  
    return (
    <div className='Elementos_lista'>
      <label className="Nuevo_elemento">
        <input
          className="Nuevo_elemento_chbx"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange} //Al dar click se va a ejecutar método
        />
        <div className="Nuevo_elemento_txt">{descripcion}</div>
      </label>
    </div>
  )
}