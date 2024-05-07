import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Link} from 'react-router-native'
export const AppBar = ()=>{
    const AppBarTab=({active, children, to}) => {
        return(
            <Link style={styles.link} to={to}>
                <Text style={styles.AppTitle}>{children}</Text>
            </Link>
        )
    }
    return(
        <View style={styles.AppBar}>
            <AppBarTab active={true} to="/">En Cartelera</AppBarTab>
            <AppBarTab active={false} to="/upcoming">Proximos Estrenos</AppBarTab>
            <AppBarTab active={false} to="/top_rated">Mejor Calificados</AppBarTab>
        </View>
    )
}

const styles=StyleSheet.create({
    AppBar:{
        backgraundColor:'#000',
        paddingVertical:5,
        color:'#fff',
        flexDirection:'row',
        marginTop:20

    },
    AppTitle:{
        color:'FFF',
        paddingHorizontal:5
    },
    link:{
        borderColor:'#fff',
        borderWidth:1,
        padding:5
    }
})