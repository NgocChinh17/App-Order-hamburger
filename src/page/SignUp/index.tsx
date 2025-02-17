import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

type RootStackParamList = {
  SignIn: undefined;
};

export default function SignUp() {
  const [text, onChangeText] = React.useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text style={styles.wrapper}>SignUp</Text>
      <View>
        <Text style={styles.titleText}>FullName:</Text>
        <TextInput style={styles.input} placeholder="enter name" />
      </View>

      <View>
        <Text style={styles.titleText}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="enter email address"
        />
      </View>

      <View>
        <Text style={styles.titleText}>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="enter password"
        />
      </View>

      <View>
        <Text style={styles.titleText}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="confirm password"
        />
      </View>
      <View style={styles.button}>
        <Button title="Sign Up" color="#841584" />
      </View>

      <View>
        <Text style={styles.textButton}>
          I have an account?{' '}
          <Text
            style={styles.textSignUp}
            onPress={() => navigation.navigate('SignIn')}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    fontSize: 30,
    textAlign: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  titleText: {
    marginLeft: 10,
  },

  button: {
    marginHorizontal: 12,
    marginTop: 15,
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
