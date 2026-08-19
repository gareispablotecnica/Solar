<<<<<<< HEAD
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'


const Home = () => {
    return (
        <View style={styles.app}>
            <ScrollView contentContainerStyle={styles.container}>
                <Header />
            </ScrollView>
        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal:10,
        paddingVertical:15,
    },
    container: {
        flex: 1, // Cambiado de flex: 1 a flexGrow: 1 para evitar problemas de corte en el scroll
    }
=======
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Encabezado from '../Components/Encabezado'

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Encabezado />
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
>>>>>>> 298f9d44f82e7d2584e50032d1c8f3afb4ac2bd3
})