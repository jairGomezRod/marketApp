import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const StatusUserAccount = ({question, onClick}) => {

  const texts = {
    register: {
      question: "Don't have an account? ",
      button: "Register",
    },
    signin: {
      question: "Do you already have an account? ",
      button: "Sign In",
    }
  }
  return (
    <View className="text-sm font-semibold mt-2 pt-1 mb-0 flex-row text-center">
      <Text>
        {texts[question].question} 
      </Text>
      <TouchableOpacity onPress={onClick}>
        <Text className="font-bold text-red-700"> {texts[question].button} </Text>
      </TouchableOpacity>
    </View>
  );
}

export default StatusUserAccount;
