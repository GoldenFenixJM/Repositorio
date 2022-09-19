import React, { useState } from 'react'
import { Form } from './Form'
import { TaskList } from './TaskList'
import { Searchbar } from './Searchbar'



export const Container = () => {
    const [list, setList] = useState([]) //List almacena los datos
    
    
    const handleAddItem = addItem => { //Actualiza el estado de list
        setList([...list, addItem]) //List se expande
    }
  return (
    <div className='Contenedor'>
        <div className='Titulo'>
          To do list
        </div>
        <Form handleAddItem={handleAddItem}/> {/* Actualizar el estado list */}


        <TaskList list={list} setList={setList}/>
        <Searchbar list_search={list} />
       
        
    </div>
  )
}

