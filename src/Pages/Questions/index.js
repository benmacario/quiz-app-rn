import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts, MPLUSRounded1c_700Bold } from '@expo-google-fonts/m-plus-rounded-1c';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#875FC0',
    alignItems: 'center',
  },

  titleTime: {
    color: '#FFF',
    opacity: 0.8,
    fontSize: 20,
    marginTop: 20,

    fontFamily: 'MPLUSRounded1c_700Bold',
  },

  time: {
    color: '#FFF',
    fontSize: 40,

    fontFamily: 'MPLUSRounded1c_700Bold',
  },

  bannerQuestion: {
    width: '90%',
    maxHeight: 320,
    marginTop: 20,
    backgroundColor: '#FFF',

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 40,
  },

  bannerTextQuestion: {
    marginHorizontal: 30,
    marginVertical: 35,

    textAlign: 'center',
    fontSize: 16,
    color: '#2E2E2E',

    fontFamily: 'MPLUSRounded1c_700Bold',
  },

  containerQuestion: {
    display: 'flex',
    width: '100%',
    height: '100%',
    marginTop: 40,
    paddingTop: 40,

    alignItems: 'center',

    backgroundColor: '#FFF',
  },

  buttonQuestion: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    width: '90%',
    alignItems: 'center',

    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 20,

    borderRadius: 15,
  },

  circle: {
    width: 45,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 10,

    borderRadius: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },

  letterCircle: {
    fontSize: 16,
    color: '#2E2E2E',

    fontFamily: 'MPLUSRounded1c_700Bold',
  },

  letterQuestion: {
    marginLeft: 20,
    color: '#2E2E2E',
    fontSize: 18,

    fontFamily: 'MPLUSRounded1c_700Bold',
  }
});

export default function Questions({ navigation  }) {
  let [fontsLoaded] = useFonts({
    MPLUSRounded1c_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.titleTime}>
            TEMPO
        </Text>
        <Text style={styles.time}>
          15s
        </Text>
      </View>
      <View style={styles.bannerQuestion}>
        <Text style={styles.bannerTextQuestion}>
        A membrana plasmática controla a entrada e saída de substâncias na célula e envolve o citoplasma. Essa afirmação é verdadeira ou falsa?
        </Text>
      </View>
      <View style={styles.containerQuestion}>
        <TouchableOpacity style={styles.buttonQuestion} onPress={() => navigation.navigate('Congratulation')}>
          <View style={styles.circle}>
            <Text style={styles.letterCircle}>A</Text>
          </View>
          <Text style={styles.letterQuestion}>Verdadeira</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuestion}>
          <View style={styles.circle}>
            <Text style={styles.letterCircle}>B</Text>
          </View>
          <Text style={styles.letterQuestion}>Falso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}