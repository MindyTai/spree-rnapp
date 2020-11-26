/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Button } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './home/HomeScreen'
import { store } from './store'
 
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={ HomeScreen }
            options={{
              headerRight: ()=> (
                <Button 
                  onPress={() => alert('This is a button!')}
                  title="Login"
                />
              )
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;