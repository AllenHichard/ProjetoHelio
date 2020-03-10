import React, {useState, useEffect}  from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import api from "../services/api"

function Home({ navigation }) {

  const [imoveis, setImoveis] = useState([]);

  async function loadImoveis(){
    const response = await api.get("/all")
    console.log(response.data[0].nome)
    setImoveis(response.data[0].nome)
    return response.data[0].nome
  }
  loadImoveis()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> {imoveis} </Text>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
        screenOptions = {{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'grey' },
            headerTitleAlign: "center"
        }}>
      <Stack.Screen 
        name="Home" 
        component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <MyStack />
  );
}