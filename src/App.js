/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from './store'
import HomeScreen from './home/HomeScreen'
import AccountScreen from './account/AccountScreen';
import OrderScreen from './order/OrderScreen'
 
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ HomeScreen } />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name='Order' component={OrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;