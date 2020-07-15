import React from 'react'
import { StyleSheet, View, TextInput,Button,FlatList,Text,Image,TouchableOpacity} from 'react-native'
import styles from './styles'
import { getImageFromApi } from '../API/TMDBApi'
class FilmItem extends React.Component{
    render() {
        //console.log(this.props)
        const {movie, displayDetailForFilm}= this.props
        return(
            <TouchableOpacity 
              style={styles.main_container_movie}
              onPress={()=> displayDetailForFilm(movie.id)}  
            >
              <Image
                style={styles.image}
                source={{uri: getImageFromApi(movie.poster_path)}}
              />
              <View style={styles.content_container}>
                <View style={styles.header_container}>
                  <Text style={styles.title_text}>{movie.title}</Text>
                  <Text style={styles.vote_text}>{movie.vote_average}</Text>
                </View>
                <View style={styles.description_container}>
                  <Text style={styles.description_text} numberOfLines={6}>{movie.overview}</Text>
                </View>
                <View style={styles.date_container}>
                  <Text style={styles.date_text}>Sorti le {movie.release_date}</Text>
                </View>
              </View>
          </TouchableOpacity>
        )
    }
}
export default FilmItem