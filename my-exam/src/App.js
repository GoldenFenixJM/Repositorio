import React, {Fragment, useState} from 'react';

const Formulario = () => {

  
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        apodo: ''
    })
    
    const handleInputChange = (event) => {
      
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
        
    }


    const enviarDatos = (event) => {
        event.preventDefault()
//Mostrando datos
        console.log(datos.nombre + ' ' + datos.apellido + ' ' + datos.apodo)
        
     
                
    }
    const borrarDatos = (event) => {
        event.preventDefault()
//Borrando datos
        setDatos({
            nombre: '',
            apellido: '',
            apodo: ''
        })
    }
    
//Formulario manda datos a la consola y borra los datos
    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="usuario">
                   <p>Nombre<input 
                    type="text" 
                    className="formulario" 
                    onChange={handleInputChange} 
                    name="nombre"></input>
                    </p>
                </div>
                <div className="usuario">
                    <p>Apellido<input 
                    type="text" 
                    className="formulario" 
                    onChange={handleInputChange} 
                    name="apellido"></input>
                    </p>
                </div>
                
                <div className="usuario">
                    <p>Apodo<input 
                    type="text" 
                    className="formulario" 
                    onChange={handleInputChange} 
                    name="apodo"></input></p>
                </div>
                <button className="boton_enviar"
                disabled={datos ? "" : "disabled"}
                type="submit" 
                
                
                >Enviar</button> 
            </form>

            

            
            <button className="boton_borrar"
                disabled={datos ? "" : "disabled"}
                type="submit"
                
                
                onClick={borrarDatos}
            >Borrar</button>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
                <li>{datos.apodo}</li>


            </ul>
        </Fragment>
    );
}
 
export default Formulario;