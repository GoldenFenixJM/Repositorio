import config from "../config/config";

////https://api.themoviedb.org/3/movie/616037?api_key=3ccca4feac90e34216554eb5e443845f&language=es-MX
export const getMovieById = async ( movieId, language= 'es-MX') => {

    const { ApiKey, Endpoint } = config;
    const url = `${Endpoint}/movie/${movieId}?api_key=${ApiKey}&{language}`;
    const resp = await fetch( url );
    const result = await resp.json();

    return result;
}