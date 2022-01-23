import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';



const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        

      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App;
