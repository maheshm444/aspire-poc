import React from 'react'
import { StyleSheet, Platform, StatusBar, LogBox } from 'react-native'

import PaymentScreen from './PaymentScreen'
import ProfileScreen from './ProfileScreen'
import CreditScreen from './CreditScreen'

import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import DebitCard from './DebitCard'
import theme from '../common/colorTheme'

const Tab = createBottomTabNavigator()
const HomeScreen = () => {
  LogBox.ignoreLogs(['Warning: ...'])
  LogBox.ignoreAllLogs()

  return (
    <Tab.Navigator
      initialRouteName='DebitCard'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons
                name={focused ? 'ios-home' : 'home-outline'}
                size={size}
                color={color}
              />
            )
          } else if (route.name === 'DebitCard') {
            return (
              <Ionicons
                name={focused ? 'card' : 'card-outline'}
                size={size}
                color={color}
              />
            )
          } else if (route.name === 'Payments') {
            return (
              <AntDesign
                name={focused ? 'swap' : 'swap'}
                size={size}
                color={focused ? color : 'gray'}
              />
            )
          } else if (route.name === 'Credit') {
            return (
              <FontAwesome5
                name={focused ? 'arrow-circle-up' : 'arrow-circle-up'}
                size={size}
                color={focused ? color : 'gray'}
              />
            )
          } else if (route.name === 'Profile') {
            return (
              <FontAwesome
                name={focused ? 'user' : 'user'}
                size={size}
                color={focused ? color : 'gray'}
              />
            )
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: theme.primary,
      })}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='DebitCard'
        component={DebitCard}
        options={{
          headerShown: false,
          title: 'Debit Card',
        }}
      />
      <Tab.Screen
        name='Payments'
        component={PaymentScreen}
        options={{ headerShown: false, title: 'Payments' }}
      />
      <Tab.Screen
        name='Credit'
        component={CreditScreen}
        options={{ headerShown: false, title: 'Credit', tabBarBadge: 3 }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{ headerShown: false, title: 'Profile' }}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.secondary,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingLeft: 10,
  },
  title: {
    color: theme.white,
  },
})
