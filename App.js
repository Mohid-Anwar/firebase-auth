import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Apps and Components
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import styles from './components/Styling';
import LoggedInScreen from './components/LoggedInScreen';
const Home = createNativeStackNavigator();

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}> Landing Page</Text>

      <TouchableOpacity
        style={styles.btnSignup}
        onPress={() => navigation.navigate('Sign Up')}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => navigation.navigate('Sign In')}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Home.Navigator>
        <Home.Screen name="Welcome Screen" component={WelcomeScreen} />
        <Home.Screen name="Sign Up" component={SignUp} />
        <Home.Screen name="Sign In" component={SignIn} />
        <Home.Screen name="LoggedInScreen" component={LoggedInScreen} />
      </Home.Navigator>
    </NavigationContainer>
  );
};

export default App;
