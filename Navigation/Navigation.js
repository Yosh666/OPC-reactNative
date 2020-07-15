//import {createStackNavigator,createAppContainer} from '@react-navigation/stack'
//import { createAppContainer, createStackNavigator } from 'react-navigation'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../Components/Search'
import FilmsDetails from '../Components/FilmDetail'
const Stack= createStackNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Search"
                screenOptions={{ gestureEnabled: false }}
            >
                <Stack.Screen
                    name='Rechercher'
                    component={Search}
                    options={{title:'Rechercher'}}
                />
                <Stack.Screen
                    name='FilmsDetails'
                    component={FilmsDetails}
                    options={{title:'Détails'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
        

}
