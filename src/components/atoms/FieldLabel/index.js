import React from 'react';
import {View, Text} from 'react-native';

const FieldLabel = ({type}) => {
  return (
    <View>
      <Text className="block capitalize text-base font-medium text-slate-700">
        { type.replace('-', ' ') }
      </Text>
    </View>
  );
}

export default FieldLabel;
