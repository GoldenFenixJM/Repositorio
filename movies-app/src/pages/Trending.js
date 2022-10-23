import {useState} from 'react';
import { MovieCard } from '../components/MovieCard';
import { useFetchTrending } from '../hooks/useFetchTrending';
import Select from 'react-select';



const Opciones=[
  {value: 'all', label: 'All'},
  {value: 'movie', label: 'Movie'},
  {value: 'tv', label: 'TV'},
  {value: 'person', label: 'Person'},
]
const Opciones2=[
  {value: 'day', label: 'Day'},
  {value: 'week', label: 'Week'},
]

export const Trending = () => {

  const {selectedOption, setSelectedOption}=useState(Opciones[0]);
  const{ setSelectedOption2, selectedOption2}=useState (Opciones2[0]);
  const {movies}= useFetchTrending(selectedOption, selectedOption2);
  const handleChange=(value)=>{
  console.log ('value', value);
    const selectedOption=value.value
    setSelectedOption(selectedOption);
  }
  const handleChange2=(value)=>{
    console.log ('value', value);
      const selectedOption2=value.value
      setSelectedOption2(selectedOption2);
    }
  return (
    <div className='container row row-cols-1 row-cols-md-3 g-3'>
      <select name="select">
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="tv">TV</option>
        <option value="person">Person</option>
        onChange={handleChange}
</select>
      
      <select name="select">
        <option value="day">Day</option>
        <option value="week">Week</option>
        onChange={handleChange2}
</select>
      
       {movies.map((movie)=>
      <MovieCard 
        key={movie.id} 
        {...movie}
      />  
      )}
    </div>
  )
 }

