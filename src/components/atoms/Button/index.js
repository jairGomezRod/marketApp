import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({content, color}) => {
  return (
    <TouchableOpacity 
      onPress={() => {console.log("Sign Button Click")}}
      className={`inline-block px-7 py-3 my-5 bg-[${color}] rounded-full shadow-md`}
    >
      <Text className="text-center font-medium text-base leading-snug">{content}</Text>
    </TouchableOpacity>
  );
}

export default Button;
