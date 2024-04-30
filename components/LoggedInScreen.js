import React from 'react';
import {View, Text} from 'react-native';

const LoggedInScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>You have successfully logged in!</Text>
    </View>
  );
};

export default LoggedInScreen;
