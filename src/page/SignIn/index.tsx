import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

type RootStackParamList = {
  SignUp: undefined;
};

export default function SignIn() {
  const [text, onChangeText] = React.useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.titleText}>Email Address:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="enter email address"
      />
      <Text style={styles.titleText}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="enter password"
      />
      <View style={styles.button}>
        <Button title="Sign In" color="#841584" />
      </View>
      <View>
        <Text style={styles.textButton}>
          Don't have an account?{' '}
          <Text style={styles.textSignUp} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    marginHorizontal: 12,
    marginTop: 15,
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
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

  titleText: {
    marginLeft: 10,
  },
});
