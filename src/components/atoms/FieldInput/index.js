import React, {useState} from 'react';
import {TextInput, SafeAreaView} from 'react-native';

const FieldInput = ({type}) => {

  const [isLoading, setLoading] = useState(false);
  const [isUserVerified, setUserVerified] = useState(false);

  const types = {
    email: {
      placeholder: "you@example.com",
      keyboardType: "email-address",
      textContentType: "emailAddress",
      inputMode: "email",
    },
    password: {
      placeholder: "",
      keyboardType: "default",
      textContentType: "password",
      inputMode: "password",
      secureTextEntry: true
    },
    "new-password": {
      placeholder: "",
      keyboardType: "default",
      textContentType: "newPassword",
      inputMode: "password",
      secureTextEntry: true
    },
    name: {
      placeholder: "Jhon",
      keyboardType: "default",
      textContentType: "name",
      inputMode: "text",
    },
    "last-name": {
      placeholder: "Doe",
      keyboardType: "default",
      textContentType: "familyName",
      inputMode: "text",
    }
  }

  let isVisiblePassword = types[type].secureTextEntry;

//  isVisiblePassword = false;
  return (
    <SafeAreaView>
      <TextInput
        placeholder={types[type].placeholder}
        keyboardType={types[type].keyboardType}
        textContentType={types[type].textContentType}
        inputMode={types[type].inputMode}
        secureTextEntry={isVisiblePassword}
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
