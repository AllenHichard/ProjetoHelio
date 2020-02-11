import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import Routes from "./routes"

export default function App() {
  return (
    <Routes />
  );
}


const styles = StyleSheet.create({
  mapa: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: "red",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20, 
  },
  botao: {
    color: "green",
    fontSize: 20,
  }
  
});
