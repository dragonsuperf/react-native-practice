/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/navigation';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/styles/theme';
import Landing from './src/components/pages/Landing';
import Home from './src/components/pages/Home';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
