import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Teste </Text>
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