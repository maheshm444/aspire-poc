import React from 'react'
import {Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
const CardNumber = ({ numbers }) => {
  return (
    <View style={tw`flex flex-row h-5 justify-around my-5 w-4/5`}>
      {numbers.map((number) => (
        <View style={tw`-ml-4`} key={number}>
          <Text style={tw`text-white text-lg font-normal tracking-wide`}>
            {number}
          </Text>
        </View>
      ))}
    </View>
  )
}

export default CardNumber
