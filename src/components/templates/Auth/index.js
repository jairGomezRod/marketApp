import { View, Image, Text } from 'react-native'
import React from 'react'
import Signin from '~organisms/Signin'

const UserAuth = () => {
  return (
    <View className="items-center">
      <Image 
        source={require('@assets/smartShopping.jpg')}
        style={{width: 150, height: 150}}
      />
      <Signin/>
    </View>
  )
}

export default UserAuth;