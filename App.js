import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// ---> Importamos los Estados
import { useState } from 'react';

export default function App() {
  // --> Logica (Variable,Variable Alterada=Estado Inicial)
  const [Pagina, setPagina] = useState('')
  
  // ---> Crear el tiempo de espera
  const Redireccionar = setTimeout(() => {
    setPagina('Home')
  }, 3000);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
