import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Button, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'

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
    },
    product: {
      borderBottomWidth: 1,
      borderColor: 'black',
      padding: 20
    }
  })
  

  const OrderItem = ({ data }) => {
    const { number, total } = data.attributes
  
    return (
      <View style={styles.product}>
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
    <SafeAreaView>
      <ScrollView>
      { orders?.map((data, idx) => <OrderItem data={data} key={idx}/>) }
      </ScrollView>
      <Button
        title='Log Out'
        onPress={handleLogOut}
      />
    </SafeAreaView>
  )
}

export default ProductScreen