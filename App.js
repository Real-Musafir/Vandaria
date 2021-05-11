import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './container/Home'
import TradeLicenseApply from './container/TradeLicenseApply'
import AboutUpazila from './container/AboutUpazila'
import UpazilaNews from './container/UpazilaNews'

const Stack = createStackNavigator()
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="TradeLicenseApply"
            component={TradeLicenseApply}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />

          <Stack.Screen
            name="AboutUpazila"
            component={AboutUpazila}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />

          <Stack.Screen
            name="UpazilaNews"
            component={UpazilaNews}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
