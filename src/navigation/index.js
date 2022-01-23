import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../constants/colors';


const Stack = createStackNavigator();

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
