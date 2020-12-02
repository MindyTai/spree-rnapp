import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

import { fetchAccessToken } from './fetchToken'
import { loginRequest } from './redux'

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20
  },
  textInput: {
    height: 30, 
    borderColor: 'gray', 
    borderWidth: 1,
    flex: 1,
    marginLeft: 10,
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 2
  },
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
    <View style={styles.container}>
      <View style={styles.input}>
        <Text>Account</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangeUserNameText(text)}
          value={userName}
          clearTextOnFocus={true}
          placeholder={'UserName'}
        ></TextInput>
      </View>
      <View style={styles.input}>
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={password => onChangePasswordText(password)}
          value={password}
          clearTextOnFocus={true}
          secureTextEntry={true}
          placeholder={'Password'}
        ></TextInput>
      </View>
      <Button 
        title='Submit'
        onPress={checkLogIn}>
      </Button>
    </View>
  )
}

export default AccountScreen