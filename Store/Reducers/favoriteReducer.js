


const initialState= {favoritesFilm:[]}


function toggleFavorite(state = initialState,action){
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const favoritesFilmIndex= state.favoritesFilm.findIndex(item=>item.id===action.value.id)
            //ça correspond à l'id du film 
            if(favoritesFilmIndex!== -1){
            //si le film est déja dans les favoris !=-1 veut dire qu'il est dans l'index du tableau
            //ici on va supprimer le film de la liste des favoris

                nextState={
                    ...state,
                    favoritesFilm:state.favoritesFilm.filter( (item,index)=>index !==favoritesFilmIndex)
                    //la fction filter permet de suuprimer le film du tableau 
                }

            }

            else{
            //ici on va simplement ajouter le fim au films favoris

                nextState={
                    ...state,
                    favoritesFilm:[...state.favoritesFilm,action.value]
                }
            }
            return nextState || state  
            
        
        default:
            return state;
    }
}

export default toggleFavorite