import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
// ---> Importamos el Logo
import Logo from '../Media/Logo/Logo.gif'
const Encabezado = () => {
  return (
    <View style={styles.container}>
        <View style={styles.Encabezado}>
            <Image 
                source={Logo}
                resizeMode='cover'
                style={styles.imgLogo}
            />
            <View style={styles.menu}>
                <Text style={styles.Titulo}>Sistema Solar</Text>
                <Text style={styles.eslogan}>La aaaaa aaaaaa aaaaa</Text>
            </View>
            <Text style={styles.Icono}>≡</Text>
        </View>
    </View>
  )
}

export default Encabezado

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Encabezado:{
        flexDirection:'row',
        width:'100%',
        height:100,
        justifyContent:'space-between',
        backgroundColor:'#4949493f',
        borderRadius:10,
        padding:10,
        borderWidth:2,
        borderColor:'#ffffff38',
    },
    imgLogo:{
        width:70,
        height:70,
        borderRadius:'60%',
    },
    Titulo:{
        color:'#fff',
    },
    Icono:{
        color:'#fff',
    },
    eslogan:{
        color:'#fff',
    }
})