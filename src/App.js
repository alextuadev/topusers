import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './navigation';
import React from 'react';


const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App;
