import React from 'react'
import { Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
const CardNumber = ({ numbers, showCardNumber }) => {
  const stars = ['****', '****', '****', '2020']
  return (
    <View style={tw`flex flex-row h-5 justify-around my-5 w-4/5`}>
      {showCardNumber
        ? numbers.map((number) => (
            <View style={tw`-ml-4`} key={number}>
              <Text style={tw`text-white text-lg font-normal tracking-wide`}>
                {number}
              </Text>
            </View>
          ))
        : stars.map((star, key) => (
            <View style={tw`-ml-4`} key={star + key}>
              <Text style={tw`text-white text-lg font-normal tracking-wide`}>
                {star}
              </Text>
            </View>
          ))}
    </View>
  )
}

export default CardNumber
