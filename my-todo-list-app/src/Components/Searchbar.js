import React, { useState } from 'react'

export const Searchbar = (props) => {
    const {list_search} = props
  // the value of the search field 
    const [descripcion, setName] = useState('');

    // the search result
    const [foundTasks, setFoundTasks] = useState(list_search);
  
    const filter = (e) => {
      const keyword = e.target.value;
  
      if (keyword !== '') {
        const results = list_search.filter((item) => {
          return item.descripcion.toLowerCase().startsWith(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundTasks(results);
      } else {
        setFoundTasks(list_search);
        // If the text field is empty, show all users
      }  
      setName(keyword);
    };
  
  

  return (
    <>
      <form> 
      {/* Cuando da enter o imput se debe ejeuctar el método handleSubmit */}
          <div className="search-list">
            <input
              type="search"
              className="busqueda"
              value={descripcion} //Asignar descripción a input
              onChange={filter}
            />
        </div>
      </form>
      <div className="user-list">
        {foundTasks && foundTasks.length > 0 ? (
          foundTasks.map((item) => (
            <li key={item.id} className="user">
              <span className="user-id">{item.descripcion}</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
    </div>
  </>
  )
}