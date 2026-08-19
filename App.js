import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

import Logo from './src/Media/Fondo/Fondo1.gif'
import { useState } from 'react';
import Home from './src/screen/Home'

export default function App() {
  const [Pagina,setPagina]=useState('')

  const Redireccionar= setTimeout(() => {
      setPagina('Home')
  }, 3000);

  if(Pagina=='Home'){
    return <Home />
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
          source={Logo}
          resizeMode='cover'
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
  }

});
