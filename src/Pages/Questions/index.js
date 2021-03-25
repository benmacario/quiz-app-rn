import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useFonts, MPLUSRounded1c_700Bold } from '@expo-google-fonts/m-plus-rounded-1c';

import question from '../../../question-group-one.json';
import failLogo from '../../assets/fail.svg';

const data = question;

let startTime ;

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
    textAlign: 'center',
  },

  bannerQuestion: {
    width: '90%',
    minHeight: 200,
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
  },

  bannerModal: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFF',
    height: '100%',
  },

  failLogo: {
    width: 266,
    height: 175,
  },

  titileModal: {
    color: '#928F8F',
    fontSize: 22,
    fontFamily: 'MPLUSRounded1c_700Bold',
    marginTop: 25,
  },

  titleFail: {
    color: '#928F8F',
    fontSize: 18,
    fontFamily: 'MPLUSRounded1c_700Bold',
    marginTop: 15,
    textAlign: 'center',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#FBAF00',
    paddingHorizontal: 80,
    paddingVertical: 12,
    borderRadius: 50,
  },

  buttonResult: {
    marginTop: 30,
    backgroundColor: '#875FC0',
    paddingHorizontal: 80,
    paddingVertical: 12,
    borderRadius: 50,
  },

  textButton: {
    color: '#FFF',
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontSize: 16,
  },

  buttonModal: {
    display: 'flex',
  }
});

let index = 0;

export default function Questions({ navigation }) {
  const [time, setTime] = useState(15);
  const [myArray, setMyArray] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if(time === 0) {
      setTime(15);
      index = 0;
      setModalVisible(true);
      return () => clearTimeout(startTime);
    }

    setMyArray(data[index].answers);
  }, [index, time]);

  useEffect(() => {
    if(isActive && time > 0) {
      startTime = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if(!isActive) {
      setIsActive(true);
      setTime(15);
      return () => clearTimeout(startTime);
    }
  }, [time, isActive]);
  
  function newQuestion() {
    index++
    setIsActive(false);
    if(!data[index]) {
      index = 0;
      setTime(15);
      navigation.navigate('Congratulation');
    }
  }

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
          {time}s
        </Text>
      </View>

        { data ? (
        <>
        <View style={styles.bannerQuestion}>
          <Text style={styles.bannerTextQuestion}>
            {data[index].question}
          </Text>
        </View>
        <View style={styles.containerQuestion}>
          { 
            myArray.map((value, i) => {
              return(
                <TouchableOpacity  key={i} style={styles.buttonQuestion} onPress={() => { newQuestion() }}>
                  <View style={styles.circle}>
                    <Text style={styles.letterCircle}>{i + 1}</Text>
                  </View>
                  <Text style={styles.letterQuestion}>{value}</Text>
                </TouchableOpacity>
              );
            })
          }

        </View>
        </>
        ) : null }
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.bannerModal}>
          <View>
            <Image style={styles.failLogo} source={failLogo} />
          </View>
          <Text style={styles.titileModal}>Visssh</Text>
          <Text style={styles.titleFail}>Seu tempo de responder a questão acababou</Text>
          <View style={styles.buttonModal}>
            <TouchableOpacity style={styles.buttonResult} onPress={() => {
              setModalVisible(false);
              navigation.navigate('Congratulation')
            }}>
              <Text style={styles.textButton}>RESULTADO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
              setModalVisible(false);
              navigation.popToTop();
            }}>
              <Text style={styles.textButton}>REINICIAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}