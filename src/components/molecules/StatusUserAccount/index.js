import React from 'react';
import {View, Text} from 'react-native';

const StatusUserAccount = () => {
  return (
    <View className="text-sm font-semibold mt-2 pt-1 mb-0 flex-row text-center">
      <Text>
        Don't have an account? 
      </Text>
      <Text className="font-bold text-red-700"> Register</Text>
    </View>
  );
}

export default StatusUserAccount;
