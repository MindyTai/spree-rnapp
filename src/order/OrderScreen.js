import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'

import { logoutRequest } from '../account/redux'
import { fetchOrders } from './fetchOrders'

const ProductScreen = ({ navigation }) => {
  const orders = useSelector(state => state.ordersReducer.orders )
  const accessToken = useSelector(state => state.accountReducer.accessToken)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchOrders(accessToken))
  })

  const handleLogOut = () => {
    dispatch(logoutRequest())
    navigation.navigate('Home')
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#dae4e9',
    },
    product: {
      margin:  20,
      height: '100%'
    },
    card: {
      backgroundColor: 'white',
      borderRadius:3,
      padding: 20,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    logOut: {
      backgroundColor: '#093a3e',
      borderRadius: 3,
      marginTop: 10,
      padding: 10,
    },
    logOutText: {
      textAlign: 'center', 
      color: 'white'
    }
  })
  

  const OrderItem = ({ data }) => {
    const { number, total } = data.attributes
  
    return (
      <View style={styles.card}>
        <View>
          <View>
          <Text>{ number }</Text>
            <Text>
            $ { total }
            </Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.product}>
          { orders?.map((data, idx) => <OrderItem data={data} key={idx}/>) }
          <TouchableOpacity
            onPress={handleLogOut}
            style={styles.logOut}
          >
            <Text style={styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductScreen