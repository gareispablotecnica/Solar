import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

import Img1 from '../Media/Planetas/1.png'
const Tarjetas = () => {
  return (
    <View style={styles.main}>
        <View style={styles.tarjeta}>
            <Image 
                source={Img1}
                resizeMode='cover'
                style={styles.img}
            />
            <View style={styles.info}>
                <Text style={styles.Nombre}>Mercurio</Text>
                <Text style={styles.Descripcion}>Es el planeta más cercano al Sol y el más pequeño del Sistema Solar. Tiene una superficie rocosa y presenta temperaturas muy extremas entre el día y la noche.</Text>
                 <Text style={styles.km}>77 millones de km</Text>
            </View>
        </View>
    </View>
  )
}

export default Tarjetas

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    tarjeta:{
        width:'100%',
        height:280,
        borderRadius:20,
        backgroundColor:'#4949493f',
        borderWidth:2,
        borderColor:'#ffffff38',
        flex:1,
        flexDirection:'row',
    },
    img:{
        width:'50%',
        height:'100%',
       borderTopLeftRadius:20,
       borderBottomLeftRadius:20,
    },
    Nombre:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    }
})