import React from 'react';
import {View, Text} from 'react-native';
import FieldInput from '~atoms/FieldInput';
import FieldLabel from '~atoms/FieldLabel';

const BaseInput = ({type}) => {
  return (
    <View className="my-3">
      <FieldLabel type={type}/>
      <FieldInput type={type}/>
    </View>
  );
}

export default BaseInput;
