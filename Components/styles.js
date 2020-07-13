import React from 'react'
import {StyleSheet} from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
const styles= StyleSheet.create({
    main_container:{
        flex:1,
        height:190,
        marginTop: 20
    },
    view:{
        marginTop:20, 
        backgroundColor:'#D15931'
    },
    imageItem:{
        flex:1,
        borderColor:'black',
        backgroundColor:'#B6A9BA',
        resizeMode : 'contain',
        height:190,
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
        flex:2,
        flexDirection:'column',
        backgroundColor:'green',

    },
    header:{
        flexDirection:'row',
        color:'yellow',
    },
    title_text:{
        backgroundColor:'#141955',
        flex:2,
        flexWrap: 'wrap',
    },
    vote_text:{
        flex:1
    },
    description_view:{
        backgroundColor:'red',
        flex:7,
    },
    date_view:{
        backgroundColor:'purple'
    },


    

})
export default styles