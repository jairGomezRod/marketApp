import { View, Image } from 'react-native'
import React, { useState } from 'react'
import Signin from '~organisms/Signin'
import Signup from '~organisms/Signup'

const UserAuth = () => {
  const [isRegisteredUser, setRegisteredUser] = useState(true);
  const handleForm = () => {
    setRegisteredUser(!isRegisteredUser);
  }

  return (
    <View className="items-center">
      <Image 
        source={require('@assets/smartShopping.jpg')}
        style={{width: 150, height: 150}}
      />
      {
        (isRegisteredUser) ?
          <Signin onChangeForm={() => handleForm()}/>
        :
          <Signup onChangeForm={() => handleForm()}/>
      }
    </View>
  )
}

export default UserAuth;