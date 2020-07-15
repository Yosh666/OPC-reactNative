const token= '1b5c74dbc286cbaa892f1a459f8e5e36'

export function getMoviesSearched(text,page){
    const url= 'https://api.themoviedb.org/3/search/movie?api_key='+token+'&language=fr-FR&query='+text+'&page='+page+'&include_adult=false'
    
    return fetch(url)
        .then((response)=>response.json())
        .catch((error)=>console.error(error))
}
export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}
export function getMovieDetail(id){
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key='+token+'&language=fr-FR')
        .then((response)=>response.json())
        .catch((error)=>console.error(error))
}