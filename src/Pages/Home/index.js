import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView  } from 'react-native';
import { useFonts, MPLUSRounded1c_700Bold } from '@expo-google-fonts/m-plus-rounded-1c';


import helloLogo from '../../assets/hello_logo.svg'
import question from '../../../question-group-two.json';

const data = question;
let index = 0;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#5f021f',
    alignItems: 'center'
  },

  helloLogo: {
    width: 328,
    height: 231,
    marginTop: 80,
  },

  inputHome: {
    display: 'flex',
    marginTop: 60,
    width: '90%',

    justifyContent: 'center',
    alignItems: 'center',
  },

  textInputHome: {
    marginBottom: 20,

    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'MPLUSRounded1c_700Bold'
  },

  input: {
    width: '100%',
    height: 55,
    marginBottom: 20,
    fontSize: 18,
    borderRadius: 12,
    backgroundColor: '#FFF',
    fontFamily: 'MPLUSRounded1c_700Bold',
    paddingLeft: 15,
  },

  button: {
    marginTop: 30,
    backgroundColor: '#FBAF00',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 50,
  },

  textButton: {
    color: '#FFF',
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 18,
  },

  sobre: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
  },

  textSobre: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 18,
    color: '#FFF',
    opacity: 0.6
  }
});

export default function Home({ navigation }) {
  const [name, setName] = useState('');
  let [fontsLoaded] = useFonts({
    MPLUSRounded1c_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.viewImage}>
        <Image style={styles.helloLogo} source={helloLogo}/>
      </View>
      <View style={styles.inputHome}>
        <Text style={styles.textInputHome}>
          Digite seu nome
        </Text>
        <TextInput
          style={styles.input}
          value={name.name}
          onChangeText={(name) => setName({name})}
          placeholder="Seu nome"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Questions', {
        data: data,
        index: index,
        name: name,
      })}>
        <Text style={styles.textButton}>
          COMEÇAR
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sobre} onPress={() => navigation.navigate('Students')}>
        <Text style={styles.textSobre}>
          Alunos
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}