import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native'; // Import the navigation hook

import styles from './Styling';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Initialize navigation hook

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in successfully!');
        // Navigate to the new screen upon successful login
        navigation.navigate('LoggedInScreen');
      })
      .catch(error => {
        // Handle sign-in errors
        if (error.code === 'auth/user-not-found') {
          console.log('No user found with this email!');
        } else if (error.code === 'auth/wrong-password') {
          console.log('Incorrect password!');
        } else if (error.code === 'auth/invalid-email') {
          console.log('Invalid email address!');
        } else {
          console.error(error.code);
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Sign In Page</Text>

      <TextInput
        style={styles.inputBoxLogin}
        onChangeText={text => setEmail(text)}
        placeholder="Enter Your Email"
      />
      <TextInput
        style={styles.inputBoxLogin}
        onChangeText={text => setPassword(text)}
        placeholder="Enter Your Password"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.btnLogin} onPress={handleSignIn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
