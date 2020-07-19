import React from 'react'
import {Stylesheet,View,Text,ActivityIndicator,ScrollView,Image, Button,TouchableOpacity} from 'react-native'
import styles from './styles'
import {getMovieDetail, getImageFromApi} from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'
import {connect} from 'react-redux'



class FilmDetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            film:undefined,
            isLoading:true
        }
    }

    // mettre une naimation pendant le chargement
    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large" color="#E08321" />
                </View>
            )
        }
    }

    //choisis quel coeur rendre
    _displayFavoriteImage(){
        var sourceImage= require('../Images/borderHeart.png')

        if(this.props.favoritesFilm.findIndex(item=>item.id===this.state.film.id)!== -1){
            sourceImage= require('../Images/fullHeart.png')
        }
        return(
            <Image
                style={styles.favorite_image}
                source={sourceImage}
            />
        )
    }

    //affiche en console log le tableau updaté des filmfavoris
    componentDidUpdate(){

        console.log('componentDidUpdate: ')
        console.log(this.props.favoritesFilm)
    }

    //permet de savoir si c'est en train de charger et récupérer les props à afficher
    componentDidMount(){
        getMovieDetail(this.props.route.params.idFilm).then(
            data=>{
                this.setState({
                    film:data,
                    isLoading:false,
                })
            }
        )
    }
    
    //toggle la liste des favoris
    _toggleFavorite(){

        const action={ type:"TOGGLE_FAVORITE",value:this.state.film}
        this.props.dispatch(action)
    }

    //affiche la composition de la vue du film
    _displayFilm(){
        const {film}=this.state
        if(this.state.film !=undefined){
            return(
                <ScrollView style={styles.scrollview_container}>
                    <Image
                        style={styles.image_detail}
                        source={{uri: getImageFromApi(film.backdrop_path)}}
                    />
                    <Text style={styles.title_text_detail}>{film.title}</Text>
                    <TouchableOpacity
                        style={styles.favorite_container}
                        onPress={() =>this._toggleFavorite()}>
                            {this._displayFavoriteImage()}
                    </TouchableOpacity>
                    <Text style={styles.description_text_detail}>{film.overview}</Text>
                    <Text style={styles.default_text}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
                    <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
                    <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
                    <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
                    <Text style={styles.default_text}>Genre(s) : {film.genres.map(function(genre){
                        return genre.name;
                        }).join(" / ")}
                    </Text>
                    <Text style={styles.default_text}>Companie(s) : {film.production_companies.map(function(company){
                        return company.name;
                        }).join(" / ")}
                    </Text>
                </ScrollView>
            )
        }
    }

    render(){
        //console.log(this.props)
        return(
            <View style={styles.main_container}>
                {this._displayLoading()}
                {this._displayFilm()}
            </View>
        )
    }

}
const mapStateToProps= (state)=>{
    return {
        favoritesFilm:state.favoritesFilm
    }
}
export default connect(mapStateToProps)(FilmDetail)