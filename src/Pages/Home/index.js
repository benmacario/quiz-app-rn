import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, MPLUSRounded1c_700Bold } from '@expo-google-fonts/m-plus-rounded-1c';


import helloLogo from '../../assets/hello_logo.svg'
import question from '../../../question-group-one.json';

const data = question;
let index = 0;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#875FC0',
    alignItems: 'center'
  },

  viewImage: {
    elevation: 1,
  },

  helloLogo: {
    width: 198,
    height: 164,
    top: 60,
  },

  bannerHome: {
    display: 'flex',
    width: '90%',
    minHeight: 300,
    maxHeight: 400,
    backgroundColor: "#fff",
    borderRadius: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },

  textBanner: {
    marginTop: 100,
    marginBottom: 30,
    marginHorizontal: 30,

    textAlign: 'center',
    fontSize: 22,
    color: '#928F8F',
    fontFamily: 'MPLUSRounded1c_700Bold'
  },

  textBannerTema: {
    marginBottom: 50,
    marginHorizontal: 30,

    textAlign: 'center',
    fontSize: 22,
    color: '#666',
    fontFamily: 'MPLUSRounded1c_700Bold'
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
  let [fontsLoaded] = useFonts({
    MPLUSRounded1c_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image style={styles.helloLogo} source={helloLogo}/>
      </View>
      <View style={styles.bannerHome}>
        <Text style={styles.textBanner}>
          O aplicativo foi feito com o
          intuitito de apresentar o
          trabalho do curso de Odontologia
        </Text>
        <Text style={styles.textBannerTema}>
          Tema: Citoplasma e Respiração Celular
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Questions', {
        data: data,
        index: index,
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
    </View>
  );
}