import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Encabezado from '../Components/Encabezado'
import Tarjetas from '../Components/Tarjetas'

const Home = () => {
  return (
// ---> 404 , 500 , 401
    <ScrollView contentContainerStyle={styles.container}>
      <Encabezado />
      <Tarjetas />
    </ScrollView>
  )
}
export default Home
const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#000',
  },
})