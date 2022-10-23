import { useEffect, useState } from "react"
import { getTrending } from "../helpers/getTrending";

export const useFetchTrending = (SelectedOption, SelectedOption2) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTrendingMovies = async ( SelectedOption, SelectedOption2) => {
    const results = await getTrending(SelectedOption, SelectedOption2);
    setMovies(results);
    setIsLoading(false);
  }

  useEffect(() => {
    getTrendingMovies(SelectedOption, SelectedOption2);
  }, [SelectedOption, SelectedOption2]);
  
  return {
    movies,
    isLoading
  }
}