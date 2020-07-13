import React from 'react'
import { StyleSheet, View, TextInput,Button,FlatList,Text,Image} from 'react-native'
import styles from './styles'
class FilmItem extends React.Component{
    render() {
        return(
            <View  style={[styles.main_container,{flex:1}, {flexDirection:'row'}]}>
                
                <Image 
                    style={styles.imageItem} 
                    source={require('./img/bat.png')}   />
                <View style={styles.content_container}>
                    <View style={styles.header}>
                         <Text style={styles.title_text}>Titre du film</Text>
                         <Text style={styles.vote_text}>Vote</Text>
                    </View>
                    <View style={styles.description_view}>
                        <Text numberOfLines={6}>Description</Text>
                    </View>
                    <View style={styles.date_view}>
                        <Text>Sortie le:</Text>
                    </View>  
                </View>           
                
            </View>
        )
    }
}
export default FilmItem