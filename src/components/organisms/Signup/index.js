import React from 'react';
import {View, Text} from 'react-native';
import StatusUserAccount from '~molecules/StatusUserAccount';

const Signup = () => {
  return (
    <View>
      <Text>Names</Text>
      <Text>Last names</Text>
      <Text>Email molecule</Text>
      <Text>Password molecule</Text>
      <StatusUserAccount/>
    </View>
  );
}

export default Signup;
