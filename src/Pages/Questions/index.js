import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts, MPLUSRounded1c_700Bold } from '@expo-google-fonts/m-plus-rounded-1c';
import failLogo from '../../assets/fail.svg';

let startTime;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#5f021f',
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
    backgroundColor: '#5f021f',
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

export default function Questions({ route, navigation }) {
  const { data, index, name } = route.params;
  const minutesCount = 15;
  const [time, setTime] = useState(minutesCount);
  const [myArray, setMyArray] = useState([]);
  const [answersCorrect, setMyAnswersCorrect] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [isActive, setIsActive] = useState(true);
  // const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    if(time === 0) {
      setTime(minutesCount);
      navigation.setParams({
      index: index + 1,
      });
      // setModalVisible(true);
      return () => clearTimeout(startTime);
    }
    
  }, [time]);

  useEffect(() => {
    if(data[index]) {
      shuffleArray(data[index].answers);
      setMyAnswersCorrect([...answersCorrect, data[index].answers_correct.toString()]);
    }
  }, [index])

  useEffect(() => {
    if(isActive) {
      startTime = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if(!isActive) {
      if(data[index]) {
        setIsActive(true);
        setTime(minutesCount);
      }
      return () => clearTimeout(startTime);
    }
  }, [time, isActive]);

  // useEffect(() => {
  //   if(!modalVisible) {
  //     return () => clearTimeout(startTime);
  //   }
  // }, [modalVisible])
  
  function newQuestion(value) {
    setAnswer([...answer, value]);
    setIsActive(false);

    navigation.setParams({
      index: index + 1,
    });
    
    if(index === 10) {
      // setModalVisible(false);

      navigation.navigate('Congratulation', {
        answerResults: answer,
        checkingAnswer: answersCorrect,
        name: name,
      });

      return () => clearTimeout(startTime);
    }
  }

  let [fontsLoaded] = useFonts({
    MPLUSRounded1c_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function shuffleArray(array) {
    const newArray = [];
    let number = Math.floor(Math.random() * array.length);
    let count = 1;
    newArray.push(array[number]);

    while (count < array.length) {
        const newNumber = Math.floor(Math.random() * array.length);
        if (!newArray.includes(array[newNumber])) {
            count++;
            number = newNumber;
            newArray.push(array[number]);
        }
    }

    setMyArray(newArray);
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

        { data[index] ? (
        <>
        <View style={styles.bannerQuestion}>
          <Text style={styles.bannerTextQuestion}>
            {data[index].question}
          </Text>
          {data[index].image && <Image style={{width: 200, height: 150}} source={require('../../assets/cicle.gif')}/>}
        </View>
        <View style={styles.containerQuestion}>
          { 
            myArray.map((value, i) => {
              return(
                <TouchableOpacity  key={value} style={styles.buttonQuestion} onPress={() => { newQuestion(value) }}>
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
      {/* <Modal
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
              setTime(minutesCount);

              navigation.setParams({
                index: 0,
              });

              clearTimeout(startTime);
              navigation.navigate('Congratulation', {
                answerResults: answer,
                checkingAnswer: answersCorrect,
                name: name,
              });
            }}>
              <Text style={styles.textButton}>RESULTADO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
              setModalVisible(false);
              navigation.setParams({
                index: 0,
              });
              navigation.popToTop();
            }}>
              <Text style={styles.textButton}>REINICIAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </View>
  );
}