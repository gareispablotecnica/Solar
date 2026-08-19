import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

import Logo from './src/Media/Fondo/Fondo1.gif'
import { useState } from 'react';
import Home from './src/screen/Home'

export default function App() {
  const [Pagina,setPagina]=useState('')

  const Redireccionar= setTimeout(() => {
      setPagina('Home')
=======
// ---> importamos ImageBackground-
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// ---> Importamos los Estados
import { useState } from 'react';
// ---> Importamos el Fondo
import Fondo from './src/Media/Fondo/Fondo1.gif'
import Home from './src/screen/Home';

export default function App() {
  // --> Logica (Variable,Variable Alterada=Estado Inicial)
  const [Pagina, setPagina] = useState('')

  // ---> Crear el tiempo de espera
  const Redireccionar = setTimeout(() => {
    setPagina('Home')
>>>>>>> 298f9d44f82e7d2584e50032d1c8f3afb4ac2bd3
  }, 3000);

  if(Pagina=='Home'){
    return <Home />
  }

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <ImageBackground 
          source={Logo}
          resizeMode='cover'
=======
      <ImageBackground
          // Ubi 
          source={Fondo}
          // modo
          resizeMode='cover'
          // Estilos
>>>>>>> 298f9d44f82e7d2584e50032d1c8f3afb4ac2bd3
          style={styles.imgFondo}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
=======
  },
  imgFondo:{
    width:'100%',
    height:'100%',
>>>>>>> 298f9d44f82e7d2584e50032d1c8f3afb4ac2bd3
  },
  imgFondo:{
    width:'100%',
    height:'100%',
  }

});
