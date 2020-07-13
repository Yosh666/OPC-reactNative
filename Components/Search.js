import React from 'react'
import {View, TextInput,Button,FlatList,Text} from 'react-native'
import movies from '../Helpers/filmsData'
import styles from './styles'
import Movie from './FilmsItem'
import FilmItem from './FilmsItem'


class Search extends React.Component{
    render(){
        return(
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={()=>{}}/> 
                <FlatList 
                    data= {movies}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item})=> <FilmItem movie={item}/>}
                />
                
            </View>
        )
    }
}

export default Search