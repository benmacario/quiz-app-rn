import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import members from '../../../name-alunos.json';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#5f021f',
    

    alignItems: 'center',
  },

  titleText: {
    color: '#FFF',
    fontSize: 40,
    marginTop: 40,
    fontWeight: 'bold'
  },

  names: {
    color: '#FFF',
    fontSize: 22,
    marginTop: 10,
  }
});

export default function Students() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Integrantes</Text>
      <Text style={styles.names}>Ana Beatriz Carvalho Cunha</Text>
      <Text style={styles.names}>Sabrina Silva de Sousa</Text>
      <Text style={styles.names}>Joana Beatriz Barbosa</Text>
      <Text style={styles.names}>Gabriela Cunha da Silva</Text>
      <Text style={styles.names}>Ana Karolina Araújo Serra</Text>
      <Text style={styles.names}>Letícia García Moraes</Text>
      <Text style={styles.names}>Guilherme Penha Cavalcanti</Text>
      <Text style={styles.names}>Gilvane Gomes Cavalcante Junior</Text>
      <Text style={styles.names}>Eduardo Coelho Ferreira</Text>
      <Text style={styles.names}>Karina Eduarda de Sousa Varão</Text>
      <Text style={styles.names}>Juliana de Sousa Magalhães</Text>
    </View>
  );
}