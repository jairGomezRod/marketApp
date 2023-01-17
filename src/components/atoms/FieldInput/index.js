import React from 'react';
import {TextInput, SafeAreaView} from 'react-native';

const FieldInput = ({type}) => {
  const types = {
    email: {
      placeholder: "you@example.com",
      keyboardType: "email-address",
      textContentType: "emailAddress",
      secureTextEntry: false
    },
    password: {
      placeholder: "",
      keyboardType: "default",
      textContentType: "password",
      secureTextEntry: true
    }
  }

  const isLoading = false;
  const isUserVerified = false;

  return (
    <SafeAreaView>
      <TextInput
        placeholder={types[type].placeholder}
        keyboardType={types[type].keyboardType}
        textContentType={types[type].textContentType}
        inputMode={type}
        secureTextEntry={types[type].secureTextEntry}
        editable={!isLoading && !isUserVerified}
        className="
          p-3 bg-white border 
          placeholder:italic
          shadow-lg border-slate-300 
          placeholder-slate-400 
          w-64 rounded-md
        "
      />
    </SafeAreaView>
  );
}

export default FieldInput;
