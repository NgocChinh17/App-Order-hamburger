import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Home: undefined;
};

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSignIn = async () => {
    await auth()
      .signInAnonymously()
      .then(() => {})
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          Alert.alert('Đăng nhập thất bại!');
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>Email Address:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email address"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
        />
      </View>

      <View style={styles.button}>
        <Button title="Sign In" color="#841584" onPress={handleSignIn} />
      </View>

      <View>
        <Text style={styles.textButton}>
          Don't have an account?{' '}
          <Text
            style={styles.textSignUp}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
  },
  textButton: {
    textAlign: 'center',
    marginTop: 10,
  },
  textSignUp: {
    color: '#841584',
    fontWeight: 'bold',
  },
});
