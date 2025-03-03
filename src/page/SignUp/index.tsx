import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
};

export default function SignUp() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSubmitSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Mật khẩu và xác nhận mật khẩu không khớp');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Đăng ký thành công');
        return navigation.navigate('SignIn');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Email đã tồn tại');
        }
      });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.wrapper}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.titleText}>Full Name:</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter full name"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.titleText}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email address"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.titleText}>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Enter password"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.titleText}>Confirm Password:</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholder="Confirm password"
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Sign Up"
            color="#841584"
            onPress={() => handleSubmitSignUp()}
          />
        </View>
        <View>
          <Text style={styles.textButton}>
            Already have an account?{' '}
            <Text
              style={styles.textSignUp}
              onPress={() => navigation.navigate('SignIn')}>
              Sign In
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  wrapper: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
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
