import React from 'react'
import {View, TextInput,Button,FlatList,Text,ActivityIndicator,StyleSheet} from 'react-native'
import movies from '../Helpers/filmsData'
import styles from './styles'
import Movie from './FilmsItem'
import FilmItem from './FilmsItem'
import {getMoviesSearched} from '../API/TMDBApi'
import {connect} from 'react-redux'


class Search extends React.Component{     

    constructor(props) {
        super(props)
        this.searchedText=""
        this.currentPage=0
        this.totalPages=0
        this.state = { 
            films: [],
            isLoading: false,            
        }
    }
    _searchMovies(){
        this.currentPage=0
        this.totalPages=0
        this.setState({
            films:[],
        },()=>{
          console.log("Page : " + this.currentPage + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)

        this._loadFilms()  
        })
        
    }
  
    _searchTextInputChanged(text){
        this.searchedText=text
    }
  
    _loadFilms() {
        if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
            this.setState({
                isLoading:true
            })
            getMoviesSearched(this.searchedText,this.currentPage+1).then(data => {
                this.currentPage=data.page
                this.totalPages=data.total_pages
                this.setState({ 
                    films: [...this.state.films,...data.results],
                    isLoading:false
                })
            })
        }
    }
    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
    }
    _displayDetailForFilm=(idFilm)=>{
        console.log("displayfilm with id"+idFilm)
        this.props.navigation.navigate("FilmsDetails",{idFilm:idFilm})
    }
    render(){
        //console.log(this.state.isLoading)
        
        return(
            <View style={styles.main_container}>
                
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={()=>this._searchMovies()}
                    />
                <Button title='Rechercher' onPress={() => this._searchMovies()}/>
                <FlatList
                    data={this.state.films}
                    extraData={this.props.favoritesFilm}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => 
                        <FilmItem 
                            movie={item}
                            isFilmFavorite={(this.props.favoritesFilm.findIndex(movie=>movie.id===item.id)!== -1)? true :false}
                            displayDetailForFilm = {this._displayDetailForFilm}
                        />}
                    onEndReachedThreshold={0.5}
                    onEndReached={()=>{
                        if(this.currentPage<this.totalPages){
                            this._loadFilms()
                        }
                    }}
                />
                {this._displayLoading()}
            </View>
        )
    }
}
const mapStateToProps=state=>{
    return{
        favoritesFilm:state.favoritesFilm
    }
}

export default connect(mapStateToProps)(Search)