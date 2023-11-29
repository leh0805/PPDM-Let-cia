import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial(){
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text>Meu primeiro app no react native! hello world!</Text>
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput 
        placeholder="Senha" 
        secureTextEntry={true} 
        style={styles.input}
      />
      <Button title = "CADASTRAR" onPress={()=>{navigation.navigate('Cadastro')}}></Button>
      <StatusBar style="auto" />
      <Text>{text}</Text>
    </View>
  );
}

function TelaCadastro(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text> Crie uma nova conta!</Text>

      <Button title = "LOGIN"onPress={()=>{navigation.navigate('Login')}}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaLogin(){
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Ja tem uma conta aqui? Faça seu login!</Text>

        <Button title = "RECUPERAR SENHA"onPress={()=>{navigation.navigate('Recuperar senha')}}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function RecuperarSenha(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Esqueceu a senha? recupere aqui</Text>

        <Button title = "INÍCIO"onPress={()=>{navigation.navigate('início')}}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function TelaInicioApp(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Tela de início do app</Text>

        <Button title = "FILMES"onPress={()=>{navigation.navigate('Filmes')}}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function Telaresenhas(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text> Veja as resenhas disponíveis</Text>

        <Button title = "RESENHAS"onPress={()=>{navigation.navigate('Resenhas')}}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function Telacomentarios(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text> Saiba informações sobre o filme</Text>

        <Button title = "INFORMAÇÕES"onPress={()=>{navigation.navigate('Informações')}}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  function TelaPerfil(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>perfil do usuário</Text>

        <Button title = "VOLTAR"onPress={()=>{navigation.navigate('Início')}}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Recuperar senha" component={RecuperarSenha} />
        <Stack.Screen name="Tela inicial " component={TelaInicioApp} />
        <Stack.Screen name="Resenhas dos filmes" component={Telaresenhas} />
        <Stack.Screen name="comentários" component={Telacomentarios} />
        <Stack.Screen name="Perfil pessoal" component={TelaPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}