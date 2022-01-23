import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../constants/colors';
import Home from '../screens/Home';
import Person from '../screens/Person';


const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.gray,
          shadowColor: colors.gray
        },
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Person" component={Person} />
    </Stack.Navigator>
  );
}
