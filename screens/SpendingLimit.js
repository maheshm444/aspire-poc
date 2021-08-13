import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TextInput,
  LogBox,
  ScrollView,
  Switch,
  Image,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { setCreditLimit } from '../slices/paymentSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import theme from '../common/colorTheme'

const SpendingLimit = () => {
  const [creditData, setCreditData] = useState({})
  axios({
    method: 'get',
    url: 'https://run.mocky.io/v3/c4b6423c-48ca-489f-a8a3-745cb8eb8542',
  }).then(function ({ data }) {
    setCreditData(data)
  })
  const { creditAmount, isCreditLimitSet } = useSelector(
    (state) => state.payment
  )

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [number, onChangeNumber] = useState('5,000')
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Text style={tw`text-white text-3xl font-bold ml-5`}>Spending Limit</Text>
      <View style={tw`flex bg-gray-100 h-full mt-20 rounded-t-3xl items-start`}>
        <View style={tw` my-10 ml-4`}>
          <View style={tw`flex flex-row items-center`}>
            <Icon
              type='antdesign'
              color={theme.iconColor}
              name='dashboard'
              style={[tw`p-2 rounded-full w-10`]}
            />
            <Text style={tw`text-base tracking-wide ml-1`}>
              Set a weekly debit card spending limit
            </Text>
          </View>
          <View
            style={[
              tw`flex flex-row items-center mt-2 pb-2 mr-4 ml-2`,
              { borderBottomColor: theme.muteColor, borderBottomWidth: 1 },
            ]}
          >
            <View
              style={[
                tw`flex w-14 h-7 rounded-md items-center py-1`,
                { backgroundColor: theme.primary },
              ]}
            >
              <Text style={tw`text-white text-sm font-bold`}>S$</Text>
            </View>
            <TextInput
              style={tw`w-full ml-4 text-3xl font-bold`}
              // onChangeText={(e) => onChangeNumber(e)}
              value={number}
              placeholder='useless placeholder'
              keyboardType='numeric'
            />
          </View>
          <View style={tw` mt-5 ml-2`}>
            <Text style={tw`text-gray-400`}>
              Here weekly means the last 7 days - not the calendar week
            </Text>
          </View>
          <View style={tw` flex flex-row mt-12 ml-2`}>
            <TouchableOpacity
              style={[
                tw` flex items-center justify-center h-10 w-24 rounded-lg`,
                { backgroundColor: theme.cardColor },
              ]}
            >
              <Text
                style={[tw`items-center font-bold`, { color: theme.primary }]}
              >
                S$ 5,000
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                tw` flex items-center justify-center h-10 w-24 rounded-lg ml-5`,
                { backgroundColor: theme.cardColor },
              ]}
            >
              <Text
                style={[tw`items-center font-bold`, { color: theme.primary }]}
              >
                S$ 10,000
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                tw` flex items-center justify-center h-10 w-24 rounded-lg ml-5`,
                { backgroundColor: theme.cardColor },
              ]}
            >
              <Text
                style={[tw`items-center font-bold`, { color: theme.primary }]}
              >
                S$ 20,000
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={tw` flex flex-row items-center justify-center mt-52 ml-14`}
        >
          <TouchableOpacity
            style={[
              tw` flex items-center w-10/12 rounded-3xl`,
              { backgroundColor: theme.primary },
            ]}
            onPress={() => {
              dispatch(
                setCreditLimit({
                  isCreditLimitSet: true,
                  creditAmount: '5000',
                })
              )
              navigation.navigate('DebitCard')
            }}
          >
            <Text style={tw`text-2xl text-white py-3`}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SpendingLimit

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
