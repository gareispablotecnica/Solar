import { StatusBar } from 'expo-status-bar';
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
  }, 3000);

  if(Pagina=='Home'){
    return <Home />
  }

  return (
    <View style={styles.container}>
      <ImageBackground
          // Ubi 
          source={Fondo}
          // modo
          resizeMode='cover'
          // Estilos
          style={styles.imgFondo}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgFondo:{
    width:'100%',
    height:'100%',
  },
});
