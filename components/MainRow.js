import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/native'
import { setCreditLimit } from '../slices/paymentSlice'
import { useDispatch } from 'react-redux'
import theme from '../common/colorTheme'

const MainRow = ({
  type,
  name,
  title,
  description,
  showSwitch = false,
  disabled = false,
  switchStyle,
  navigateTo = null,
}) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = (e) => {
    setIsEnabled((previousState) => !previousState)
    !isEnabled && navigation.navigate(navigateTo)
    isEnabled &&
      dispatch(
        setCreditLimit({
          isCreditLimitSet: false,
          creditAmount: '',
        })
      )
  }
  return (
    <View style={tw`flex flex-row justify-start items-center mt-4`}>
      <Icon
        type={type}
        color='white'
        name={name}
        style={[
          tw`p-2 rounded-full w-10 mt-2`,
          { backgroundColor: theme.iconColor },
        ]}
      />
      <View>
        <Text style={tw`pl-3 text-base tracking-wide font-bold`}>{title}</Text>
        <Text style={tw`pl-3 text-sm tracking-tight`}>{description}</Text>
      </View>
      {showSwitch && (
        <View style={tw`${switchStyle || 'ml-12'} `}>
          <Switch
            trackColor={{
              false: theme.trackColorfalse,
              true: theme.trackColortrue,
            }}
            thumbColor={isEnabled ? theme.iconColor : theme.switchThumb}
            ios_backgroundColor={theme.colorLight}
            onValueChange={toggleSwitch}
            value={isEnabled}
            disabled={disabled}
          />
        </View>
      )}
    </View>
  )
}

export default MainRow

const styles = StyleSheet.create({})
