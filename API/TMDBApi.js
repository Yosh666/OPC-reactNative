const token= '1b5c74dbc286cbaa892f1a459f8e5e36'

export function getMoviesSearched(text){
    const url= 'https://api.themoviedb.org/3/search/movie?api_key='+token+'&language=fr-FR&query='+text+'&page=1&include_adult=false'
    
    return fetch(url)
        .then((response)=>response.json())
        .catch((error)=>console.error(error))
}