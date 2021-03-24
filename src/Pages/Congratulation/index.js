import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { useFonts, MPLUSRounded1c_700Bold } from '@expo-google-fonts/m-plus-rounded-1c';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import winnerLogo from '../../assets/winner.svg'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#875FC0',
    alignItems: 'center',
  },

  bannerWinner: {
    marginTop: 80,
    paddingVertical: 40,
    paddingHorizontal: 20,

    width: '90%',
    maxHeight: 800,

    borderRadius: 40,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFF',
  },

  winnerLogo: {
    width: 287,
    height: 164,
  },

  titleResults: {
    color: '#928F8F',
    fontSize: 18,
    fontFamily: 'MPLUSRounded1c_700Bold',
    marginTop: 25,
  },

  textCorrect: {
    color: '#2EC66F',
    fontSize: 45,
    fontFamily: 'Roboto_700Bold',
    marginVertical: 10,
  },

  textComplete: {
    color: '#928F8F',
    fontSize: 18,
    fontFamily: 'MPLUSRounded1c_700Bold',
    marginTop: 15,
    textAlign: 'center',
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
  }
});

export default function Congratulation({ navigation }) {
  let [fontsLoaded] = useFonts({
    MPLUSRounded1c_700Bold,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return(
    <View style={styles.container}>
      <View style={styles.bannerWinner}>
        <View>
          <Image style={styles.winnerLogo} source={winnerLogo} />
        </View>
        <Text style={styles.titleResults}>
          Resultado
        </Text>
        <Text style={styles.textCorrect}>
          7 Corretas
        </Text>
        <Text style={styles.textComplete}>
          Você concluiu o desafio com sucesso
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
        <Text style={styles.textButton}>REINICIAR</Text>
      </TouchableOpacity>
    </View>
  );
}