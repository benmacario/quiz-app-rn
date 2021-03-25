import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import members from '../../../name-alunos.json';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#875FC0',
    

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
      <Text style={styles.names}>Clarisse Portácio Cunha</Text>
      <Text style={styles.names}>João Victor Coelho Cruz</Text>
      <Text style={styles.names}>Geovanna Matos Fróes</Text>
      <Text style={styles.names}>Érika Yasmim da Silva Froz</Text>
      <Text style={styles.names}>David Lima da Silva</Text>
      <Text style={styles.names}>Bruna Carolyne Alves dos Santos</Text>
      <Text style={styles.names}>Jessyca dos Santos Terças</Text>
      <Text style={styles.names}>Joyna Samirian</Text>
      <Text style={styles.names}>Gleice Yara Costa Aragão</Text>
      <Text style={styles.names}>Icleiton Roges Mesquita Soares</Text>
      <Text style={styles.names}>Thalles Matos</Text>
    </View>
  );
}