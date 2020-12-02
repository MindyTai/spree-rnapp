import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Text, View, StyleSheet, Button, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'

import { fetchAccessToken } from './fetchToken'
import { loginRequest } from './redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dae4e9',
    justifyContent: "center",
  },
  input: {
    marginHorizontal: 20,
  },
  textInput: {
    height: 50, 
    borderColor: 'gray', 
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 2
  },
  title: {
    lineHeight: 50,
    fontWeight: 'bold',
    marginRight: 10
  },
  logIn: {
    backgroundColor: '#093a3e',
    borderRadius: 3,
    marginTop: 10,
    padding: 10,
  },
  loginText: {
    textAlign: 'center', 
    color: 'white'
  }
})

const AccountScreen = ({ navigation }) => {
  const [userName, onChangeUserNameText] = useState('spree@example.com');
  const [password, onChangePasswordText] = useState('spree123');

  const dispatch = useDispatch()

  const checkLogIn = () => {
    if(userName === 'spree@example.com' && password === 'spree123'){
      dispatch(loginRequest())
      dispatch(fetchAccessToken())
      navigation.navigate('Order')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.title}>Account</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangeUserNameText(text)}
          value={userName}
          clearTextOnFocus={true}
          placeholder={'UserName'}
        ></TextInput>
      </View>
      <View style={styles.input}>
        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={password => onChangePasswordText(password)}
          value={password}
          clearTextOnFocus={true}
          secureTextEntry={true}
          placeholder={'Password'}
        />
         <TouchableOpacity
            onPress={checkLogIn}
            style={styles.logIn}
          >
            <Text style={styles.loginText}>Submit</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default AccountScreen