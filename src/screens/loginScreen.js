import React from 'react'
import {View, Text, Button} from 'react-native'

export const LoginScreen = ({navigation}) => {
  return (
    <View>
        <Text>Login Screen</Text>
        <Button title="Go to Dashboard" onPress={() => navigation.navigate('DashboardScreen')} />
    </View>
  )
}


