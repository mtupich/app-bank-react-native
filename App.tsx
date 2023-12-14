import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/bg.png')}
        style={styles.bg}
      />

      <View style={styles.loginContainer}>
        <Text style={styles.title}>Faça seu login</Text>

        <Text style={styles.text}>CPF</Text>
        <TextInput style={styles.textPlaceholder}>CPF</TextInput>
        <View style={styles.border}></View>

        <Text style={styles.text}>SENHA</Text>
        <TextInput style={styles.textPlaceholder}>SENHA</TextInput>
        <View style={styles.border}></View>

        <TouchableOpacity style={[styles.button]} >
          <Text style={styles.buttonText}>Entrar</Text> 
        </TouchableOpacity> 
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  loginContainer: {
    height: '40%',
    width: '80%',
    borderRadius: 8,
    position: 'absolute', 
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 12,
    color: 'white',
    marginTop: 4,
    marginLeft: 24,
    marginRight: 24,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  textPlaceholder: {
    color: 'white',
    fontSize: 10,
    marginTop: 4,
    marginLeft: 24,
    marginRight: 24,
    paddingBottom: 10,
  },
  border: {
    height: '1%',
    backgroundColor: 'white',
    marginLeft: 24,
    marginRight: 24,
  },
  button: {
    borderWidth: 1, 
    borderColor: 'white',
    padding: 12,
    margin: 16,
    borderRadius: 8,
    width: "90%",
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  }
});
