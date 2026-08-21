import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Encabezado from '../Components/Encabezado'
import Tarjetas from '../Components/Tarjetas'

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Encabezado />
      <Tarjetas />
    </ScrollView>
  )
}
export default Home
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:15,
        paddingHorizontal:10,
        backgroundColor:'#000',
    },
})