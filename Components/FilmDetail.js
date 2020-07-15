import React from 'react'
import {Stylesheet,View,Text,ActivityIndicator,ScrollView,Image} from 'react-native'
import styles from './styles'
import {getMovieDetail, getImageFromApi} from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'


class FilmDetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            film:undefined,
            isLoading:true
        }
    }
    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large" color="#E08321" />
                </View>
            )
        }
    }
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
        return(
            <View style={styles.main_container}>
                {this._displayLoading()}
                {this._displayFilm()}
            </View>
        )
    }

}
export default FilmDetail