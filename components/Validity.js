import React from 'react'
import { Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const Validity = ({ thru, cvv }) => {
  return (
    <View style={tw`flex flex-row justify-between w-44`}>
      <View>
        <Text style={tw`text-white text-sm font-normal tracking-wide`}>
          Thru: {thru}
        </Text>
      </View>
      <View>
        <Text style={tw`text-white text-sm font-normal tracking-wide`}>
          CVV: {cvv}
        </Text>
      </View>
    </View>
  )
}

export default Validity
