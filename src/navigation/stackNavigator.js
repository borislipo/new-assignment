import * as React from 'react';
import { LoginScreen } from '../screens/loginScreen';
import { DashboardScreen } from '../screens/dashboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="DashboardScreen" options={{ headerShown: false }} component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

