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
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './store'
import HomeScreen from './home/HomeScreen'
import AccountScreen from './account/AccountScreen';
import OrderScreen from './order/OrderScreen'
import ProductDetailScreen from './home/ProductDetailScreen'
 
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}  
            options={({ navigation }) => ({
              title: 'Home',
              headerRight: () => (
                <Button 
                  title='Log In'
                  onPress={() => navigation.navigate('Account')} />
              ),
            })}
          />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name='Order' component={OrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;