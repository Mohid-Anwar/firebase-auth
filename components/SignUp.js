import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './Styling';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Welcome Screen');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        } else {
          console.error(error.code);
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Sign Up Page</Text>

      <TextInput
        style={styles.inputBox}
        onChangeText={text => setEmail(text)}
        placeholder="Enter Your Email"
      />
      <TextInput
        style={styles.inputBox}
        onChangeText={text => setPassword(text)}
        placeholder="Enter Your Password"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.btnSignup} onPress={handleSignUp}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
