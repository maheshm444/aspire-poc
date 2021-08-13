import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import theme from '../common/colorTheme'
import favImage from '../assets/fav.png'

const CreditScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={tw`flex flex-row items-center justify-between`}>
        <Text style={tw`text-white text-3xl font-bold ml-4`}>Credits</Text>
        <Image
          source={favImage}
          style={[tw`h-10 w-10 mr-5`, { resizeMode: 'contain' }]}
        />
      </View>
      <View
        style={tw`flex bg-gray-100 h-full mt-20 rounded-t-3xl items-center`}
      >
        <Text style={[tw`mt-20 text-2xl font-bold`, { color: theme.primary }]}>
          Under Construction
        </Text>
      </View>
    </View>
  )
}

export default CreditScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.secondary,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  title: {
    color: theme.white,
  },
})
