import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
const CardUser = ({ username }) => {
  return (
    <View>
      <Text style={tw`text-white text-xl font-bold tracking-wide`}>
        {username}
      </Text>
    </View>
  )
}

export default CardUser

const styles = StyleSheet.create({})
