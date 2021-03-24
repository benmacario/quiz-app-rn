import React from 'react';
import { Text, StatusBar } from 'react-native';

export default function Header(props) {
  return(
    <Text>
      {props.title}
      <StatusBar barStyle="light-content" backgroundColor="#875FC0"/>
    </Text>
  );
}