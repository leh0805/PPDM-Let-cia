import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function TelaInicial() {


  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/originals/37/07/b6/3707b6cd16def859cb656857ba8882b5.jpg',
        }}
      />
      <Button
        color="#5F1515"
        title="CADASTRAR"
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
      ></Button>
      <Button
        color="#5F1515"
        title="LOGIN"
        onPress={() => {
          navigation.navigate("Login");
        }}
      ></Button>
      <StatusBar style="auto" />
      <Text>{text}</Text>
    </View>
  );
}

function TelaCadastro() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro</Text>
      <TextInput
        placeholder="Nome"
        keyboardType="name"
        style={styles.input}
      />
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
      <Button
        color="#5F1515"
        title="CADASTRE-SE"
        onPress={() => {
          navigation.navigate("Login");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaLogin() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
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
      <Button
        color="#5F1515"
        title="ESQUECI A SENHA"
        onPress={() => {
          navigation.navigate("Recuperar senha");
        }}
      ></Button>
      <Button
        color="#5F1515"
        title="ENTRAR"
        onPress={() => {
          navigation.navigate("Começo");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function RecuperarSenha() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esqueceu a senha</Text>
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        color="#5F1515"
        title="COMEÇO"
        onPress={() => {
          navigation.navigate("Começo");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaUmApp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela inicial: bem vindo(a)!</Text>

      <Button
        color="#5F1515"
        title="RESENHAS"
        onPress={() => {
          navigation.navigate("Resenhas");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaResenhas() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Veja os filmes disponíveis para resenha</Text>

      <Button
        color="#5F1515"
        title="FILMES"
        onPress={() => {
          navigation.navigate("Curiosidades");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCuriosidades() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Curiosidades: Atores e atrizes, diretores e local de gravação</Text>

      <Button
        color="#5F1515"
        title="CURIOSIDADES"
        onPress={() => {
          navigation.navigate("Perfil");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaPerfil() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Veja seu perfil aqui:</Text>

      <Button
        color="#5F1515"
        title="VOLTAR"
        onPress={() => {
          navigation.navigate("Início");
        }}
      ></Button>
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
        <Stack.Screen name="Começo" component={TelaUmApp} />
        <Stack.Screen name="Resenhas" component={TelaResenhas} />
        <Stack.Screen name="Curiosidades" component={TelaCuriosidades} />
        <Stack.Screen name="Perfil" component={TelaPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Roboto",
  },
  input: {
    height: 50,
    margin: 15,
    borderWidth: 1,
    padding: 10,

  },
  image: {
    width: "500px",
    height:"550px",

  }
});