import React from 'react'
import { Checkbox } from './Checkbox'

export const TaskList = props => { //Recibe list y setList
    const {list, setList} = props
    
    
    const onChangeStatus = e => {
        const {name, checked} = e.target //Recibir los datos de Checkbox que hayan cambiado, recorrer lista con map y actualizar los valores
        const updateList = list.map(item => ({
            ...item, 
            done: item.id===name?checked: item.done
        }))
        setList(updateList)
    }
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done) //Filtra la lista eliminando los items donde done sea igual a true
        setList(updateList) //Actualiza la lista
    }

    const chk = list.map(item => ( //Recorrer la lista para generar n componentes de Checkbox
        <Checkbox key={item.id} data={item} onChange={onChangeStatus}/> //Manejador de eventos
    ))
    
    
    
  return (
    <>
        <div>
            {list.length ? chk : "No tasks"} {/* Si la lista está vacía escribir no tasks */}
            {list.length ? (
                <p>
                    <button className="button_delete" onClick={onClickRemoveItem}> {/* Manejador de eventos */}
                        Eliminar
                    </button>
                </p>
                
            ) : null}
        </div>
        
        
    
    </>
  )
}
