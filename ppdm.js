import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Sabia que é o meu primeiro app do React Native? :)</Text>
      <Button title="Cadastrar" onPress={()=>{
        navigation.navigate ('Cadastro')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

function TelaCadastro(){
  return (
    <View style={styles.container}>
      <Text>essa é a segunda tela!</Text>
      <Text>aqui faz o cadastro</Text>
      <Button title="Voltar" onPress={()=>{
        navigation.navigate ('Início')
      }}></Button>
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