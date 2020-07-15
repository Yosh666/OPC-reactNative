import React from 'react'
import {StyleSheet} from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
const styles= StyleSheet.create({
    main_container:{
        flex:1,
        
    },
    main_container_movie: {
        height: 190,
        flexDirection: 'row'
      },
    view:{
        marginTop:20, 
        backgroundColor:'#D15931'
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        
    },
    textinput:{
        marginLeft:10,
        marginRight:10, 
        height: 50, 
        borderColor:'#7244CF',
        borderWidth:1,
        paddingLeft:5,
    },
    content_container:{
        flex: 1,
        margin: 5

    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
      },
    title_text:{
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text:{
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
      },
    description_text: {
    fontStyle: 'italic',
    color: '#666666'
    },
    date_container: {
        flex: 1
    },
      date_text: {
        textAlign: 'right',
        fontSize: 14
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_container: {
        flex: 1
    },
    image_detail: {
        height: 169,
        margin: 5
      },
      title_text_detail: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
      },
      description_text_detail: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15
      },
      default_text: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
      },


    

})
export default styles