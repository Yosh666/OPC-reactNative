import React from 'react'
import {View, TextInput,Button,FlatList,Text} from 'react-native'
import movies from '../Helpers/filmsData'
import styles from './styles'
import Movie from './FilmsItem'
import FilmItem from './FilmsItem'
import {getMoviesSearched} from '../API/TMDBApi'


class Search extends React.Component{
    // Components/Search.js



    

    constructor(props) {
        super(props)
        this.searchedText=""
        this.state = { 
            films: [],
            
        }
    }
  
    _searchTextInputChanged(text){
        this.searchedText=text
    }
  
    _loadFilms() {
        if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
          getMoviesSearched(this.searchedText).then(data => {
              this.setState({ films: data.results })
          })
        }
      }
    render(){
        return(
            <View style={styles.main_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    />
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem movie={item}/>}
                />
            </View>
        )
    }
}

export default Search