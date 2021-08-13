import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import MainRow from '../components/MainRow'
import CardNumber from '../components/CardNumber'
import Validity from '../components/Validity'
import CardUser from '../components/CardUser'
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Pressable,
} from 'react-native'
import { useSelector } from 'react-redux'
import favImage from '../assets/fav.png'
import favWhiteImage from '../assets/fav-white.png'
import { ProgressBar } from 'react-native-paper'
import { Image } from 'react-native'
import theme from '../common/colorTheme'
import { Entypo } from '@expo/vector-icons'

const DebitCard = () => {
  const [showCardNumber, setShowCardNumber] = useState(false)
  const { isCreditLimitSet } = useSelector((state) => state.payment)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={tw`flex flex-row items-center justify-between`}>
        <Text style={tw`text-white text-3xl font-bold ml-4`}>Debit Card</Text>
        <Image
          source={favImage}
          style={[tw`h-10 w-10 mr-5`, { resizeMode: 'contain' }]}
        />
      </View>
      <Text style={tw`text-white text-base py-7 tracking-wider ml-4`}>
        Available balance
      </Text>
      <View style={tw`flex flex-row items-center ml-4`}>
        <View
          style={[
            tw`flex w-14 h-7 rounded-md items-center py-1`,
            { backgroundColor: theme.primary },
          ]}
        >
          <Text style={tw`text-white text-sm font-bold tracking-wide `}>
            S$
          </Text>
        </View>
        <View style={tw`flex px-3`}>
          <Text style={tw`text-white text-3xl font-bold`}>3,000</Text>
        </View>
      </View>

      <Pressable
        style={tw`flex items-center justify-center ml-48 mr-5 bg-white h-9 rounded-t-lg`}
        onPress={() =>
          showCardNumber ? setShowCardNumber(false) : setShowCardNumber(true)
        }
      >
        {showCardNumber ? (
          <View style={tw`flex flex-row justify-around items-center`}>
            <View>
              <Entypo
                name={'eye'}
                size={15}
                color={theme.primary}
                style={tw`mr-5`}
              />
            </View>
            <View>
              <Text style={[tw`text-sm font-bold`, { color: theme.primary }]}>
                Hide card Number
              </Text>
            </View>
          </View>
        ) : (
          <View style={tw`flex flex-row justify-around items-center`}>
            <View>
              <Entypo
                name={'eye-with-line'}
                size={15}
                color={theme.primary}
                style={tw`mr-5`}
              />
            </View>
            <View>
              <Text style={[tw`text-sm font-bold`, { color: theme.primary }]}>
                Show card Number
              </Text>
            </View>
          </View>
        )}
      </Pressable>
      <View
        style={[
          tw`flex bg-purple-600 overflow-visible h-56 w-11/12 z-50 absolute my-52 mx-4 rounded-xl items-center`,
          { backgroundColor: theme.primary },
        ]}
      >
        <View style={tw`self-end flex flex-row mr-7 mt-4`}>
          <Image
            source={favWhiteImage}
            style={[tw`h-7 w-7 mr-2`, { resizeMode: 'contain' }]}
          />
          <Text style={tw`text-white text-lg font-medium tracking-wide`}>
            aspire
          </Text>
        </View>
        <View style={tw`self-start ml-5 my-3`}>
          <CardUser username={'Mark Henry'} />
          <CardNumber
            numbers={['5467', '3411', '2413', '2020']}
            showCardNumber={showCardNumber}
          />
          <Validity thru='12/20' cvv='456' showCardNumber={showCardNumber} />
        </View>
        <View style={tw`self-end mr-7`}>
          <View>
            <Text
              style={tw`text-white text-2xl font-bold italic tracking-wide`}
            >
              VISA
            </Text>
          </View>
        </View>
      </View>
      <View
        style={tw`flex bg-gray-100 h-2/3 mt-20 rounded-t-3xl flex items-start`}
      >
        <View style={tw` my-44 ml-4 w-full`}>
          {isCreditLimitSet && (
            <>
              <View
                style={tw`flex flex-row items-end justify-between mt-5 w-11/12`}
              >
                <View style={tw`flex flex-row`}>
                  <Text style={tw`text-sm`}>Debit card spending limit</Text>
                </View>
                <View style={tw`flex flex-row`}>
                  <Text
                    style={[tw`text-sm font-bold`, { color: theme.primary }]}
                  >
                    $345 |{' '}
                  </Text>
                  <Text style={tw`text-sm font-bold text-gray-400`}>
                    $5,000
                  </Text>
                </View>
              </View>
              <View style={tw`mt-2 w-11/12`}>
                <ProgressBar
                  progress={0.2}
                  color={theme.primary}
                  style={[tw`rounded-full`, { height: 15 }]}
                />
              </View>
            </>
          )}

          <View style={tw`flex`}>
            <MainRow
              type='antdesign'
              name='upload'
              title='Top-up account'
              description='Deposit money to your account to use with card'
            />
            <MainRow
              type='antdesign'
              name='dashboard'
              title='Weekly spending limit'
              description='You havent set any spending limit on card'
              showSwitch={true}
              navigateTo={'SpendingLimit'}
            />
            <MainRow
              type='entypo'
              name='stopwatch'
              title='Freeze card'
              description='Your debit card is currently active'
              showSwitch={true}
              disabled={true}
              switchStyle='ml-24'
            />
            {/* <MainRow
                type='antdesign'
                name='idcard'
                title='Get a new card'
                description='This deactivates your current debit card'
                disabled={true}
                switchStyle='ml-24'
              /> */}
          </View>
        </View>
      </View>
    </View>
  )
}

export default DebitCard

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
