import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import favImage from './assets/fav.png'

import { store } from './store'
import { Provider } from 'react-redux'
import SpendingLimit from './screens/SpendingLimit'
import { Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
const Stack = createNativeStackNavigator()
import theme from './common/colorTheme'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='MainHome'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='SpendingLimit'
            component={SpendingLimit}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: theme.secondary,
              },
              headerTintColor: 'white',
              headerRight: () => (
                <Image
                  source={favImage}
                  style={[tw`h-10 w-10`, { resizeMode: 'contain' }]}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.secondaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
