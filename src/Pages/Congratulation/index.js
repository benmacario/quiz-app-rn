import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Share } from 'react-native';
import ViewShot, { captureRef } from "react-native-view-shot";

import { useFonts, MPLUSRounded1c_700Bold } from '@expo-google-fonts/m-plus-rounded-1c';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import winnerLogo from '../../assets/winner.svg'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#5f021f',
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

  textCorrectGreat: {
    color: '#2EC66F',
    fontSize: 45,
    fontFamily: 'Roboto_700Bold',
    marginVertical: 10,
  },

  textCorrectGood: {
    color: '#FBAF00',
    fontSize: 45,
    fontFamily: 'Roboto_700Bold',
    marginVertical: 10,
  },

  textCorrectFail: {
    color: 'red',
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

  buttonSharing: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
    backgroundColor: '#2EC66F',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 50,
  },

  textButton: {
    color: '#FFF',
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 18,
  }
});


export default function Congratulation({ route, navigation }) {
  const { answerResults, checkingAnswer, name } = route.params;
  const viewShotRef = useRef(viewShotRef);
  let result = [];

  const answer = answerResults;
  const checking = checkingAnswer;
  const myName = name;

  for(let i = 0; i <= checking.length; i++) {
    if(checking.indexOf(answer[i]) > -1) {
      result.push(answer[i]);
    }
  }

  let [fontsLoaded] = useFonts({
    MPLUSRounded1c_700Bold,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  function Result() {
    
    if(result.length === 10) {
      return(
        <>
          <Text style={styles.textCorrectGreat}>
            {result.length} Corretas
          </Text>
          <Text style={styles.textComplete}>
          Perfeito, você RESPIRA citologia
        </Text>
        </>
      )
    } else if(result.length > 7 && result.length < 10) {
      return(
        <>
          <Text style={styles.textCorrectGood}>
            {result.length} Corretas
            </Text>
          <Text style={styles.textComplete}>
            Muito bem, continue focado assim
          </Text>
        </>
      )
    } else if(result.length < 7) {
      if(result.length === 1) {
        return(
          <>
            <Text style={styles.textCorrectFail}>
              Apenas {result.length}
            </Text>
            <Text style={styles.textComplete}>
              Vissh, estude mais!!!
            </Text>
          </>
        );
      } else if(result.length === 0) {
        return(
          <>
            <Text style={styles.textCorrectFail}>
              {result.length}
            </Text>
            <Text style={styles.textComplete}>
              Credo, você errou tudo!!!
            </Text>
          </>
        );
      }

      return(
        <>
          <Text style={styles.textCorrectFail}>
          {result.length} Corretas
          </Text>
          <Text style={styles.textComplete}>
            Vissh, estude um pouco mais!!!
          </Text>
        </>
      )
    }
  }

  async function captureViewShot() {
    
    const imageURI = await captureRef(viewShotRef, {
      format: 'jpg',
      quality: 0.8
    })
    Share.share({title: 'ResultadoQuiz', url: imageURI})
  }

  return(
    <View style={styles.container}>
      <ViewShot ref={viewShotRef}>
        <View style={styles.bannerWinner}>
          <View>
            <Image style={styles.winnerLogo} source={winnerLogo} />
          </View>
          <Text style={styles.titleResults}>
            Seu resultado {myName.name}
          </Text>
          <Result />
        </View>
      </ViewShot>
      <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
        <Text style={styles.textButton}>REINICIAR</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.buttonSharing} onPress={() => captureViewShot()}>
        <Text style={styles.textButton}>Compartilhar</Text>
      </TouchableOpacity> */}
    </View>
  );
}