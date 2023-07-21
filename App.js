import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import useProdutores from './src/hooks/useProdutores';
import Home from './src/telas/Home';
import Cesta from './src/telas/Cesta';

export default function App() {
  const produtores = useProdutores(false);

  return (
    <SafeAreaView style={styles.tela}>
      <StatusBar style="auto" />
      {/* <Home melhoresProdutores={false} /> */}
      {produtores.length > 0 && 
        <Cesta produtor={{
          nome: produtores[0].nome, 
          imagem: produtores[0].imagem
        }}
        {...produtores[0].cestas[0]} />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    marginTop: 24,
  },
});

/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Cavalo.js</Text>
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
*/
