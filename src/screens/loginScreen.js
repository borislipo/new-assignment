import React from 'react'
import {View, Text, Button} from 'react-native'
import { LoginModal } from '../components/loginModal'
import { styles } from '../theme/appTheme'

export const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.globalMargin}>
        <Text>Login Screen</Text>
        <Button title="Go to Dashboard" 
        onPress={() => navigation.navigate('DashboardScreen')} />
        <LoginModal />

    </View>
  )
}


