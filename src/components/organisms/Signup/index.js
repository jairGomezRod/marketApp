import React from 'react';
import {View} from 'react-native';
import StatusUserAccount from '~molecules/StatusUserAccount';
import BaseInput from '~molecules/BaseInput';
import Button from '~atoms/Button'

const Signup = (props) => {
  return (
    <View className="items-center">
      <BaseInput type="name"/>
      <BaseInput type="last-name"/>
      <BaseInput type="email"/>
      <BaseInput type="new-password"/>
      <Button color="#29EFC1" content="Sign Up"/>
      <StatusUserAccount onClick={props.onChangeForm} question="signin"/>
    </View>
  );
}

export default Signup;
