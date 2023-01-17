import React from 'react';
import {View} from 'react-native';
import StatusUserAccount from '~molecules/StatusUserAccount';
import BaseInput from '~molecules/BaseInput';
import Button from '~atoms/Button'

const Signin = () => {
  return (
    <View className="items-center">
      <BaseInput type="email"/>
      <BaseInput type="password"/>
      <Button color="#29EFC1" content="Sign In"/>
      <StatusUserAccount/>
    </View>
  );
}

export default Signin;
