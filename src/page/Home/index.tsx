import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Order: undefined,
  SignIn: undefined,
}

export default function Home() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <View style={styles.imageCenter}>
        <Image
          style={styles.image}
          source={require('../../asset/image/burger.jpg')}
        />
      </View>

      <Text style={styles.wrapper}>Welcome to our hamburger shop!</Text>

      <View style={styles.button}>
        <Button
          title="Go to Order"
          onPress={() => navigation.navigate('Order')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    fontSize: 23,
    textAlign: 'center',
    color: 'red',
  },
  button: {
    marginHorizontal: 100,
    marginTop: 15,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 15,
    borderRadius: 100,
  },
  imageCenter: {
    margin: 'auto',
    marginTop: '50%',
  },
  buttonSignIn: {
    marginTop: 30,
    marginHorizontal: 100,
  },
});
