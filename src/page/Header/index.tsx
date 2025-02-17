import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined,
  Orders: undefined,
  Notifications: undefined,
  SignIn: undefined,
}

export default function Header() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [menu, _] = useState([
    {id: 1, name: 'Home', onPress: () => navigation.navigate('Home')},
    {id: 2, name: 'Orders', onPress: () => navigation.navigate('Orders')},
    {
      id: 3,
      name: 'Notifications',
      onPress: () => navigation.navigate('Notifications'),
    },
    {
      id: 4,
      name: 'LogIn',
      onPress: () => {
        navigation.navigate('SignIn');
      },
    }
  ]);

  return (
    <Text style={styles.container}>
      {menu.map(item => {
        return (
          <View key={item.id}>
            <Text style={styles.wrapper} onPress={item.onPress}>
              {item.name}
            </Text>
          </View>
        );
      })}
    </Text>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    fontSize: 15,
    marginHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 15,
    fontFamily: 'Roboto',
  },
  container: {
    backgroundColor: 'white',
    marginBottom: 15,
  },
});
