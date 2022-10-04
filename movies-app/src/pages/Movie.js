import React from 'react'
import { useParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard';
import { useFetchMovieById } from '../hooks/useFetchMovieById'



export const Movie = () => {
   const {movieId}= useParams();
    const {movie, isLoading}=useFetchMovieById(movieId);
    console.log('movie', movie);
  return (
   <div className='text-center'> 
    <MovieCard
        {...movie}
    />
    </div>
  )
}
