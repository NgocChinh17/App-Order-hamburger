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

  const [activeMenuId, setActiveMenuId] = useState<number | null>(1);

  const menu = [
    {id: 1, name: 'Home', onPress: () => { navigation.navigate('Home'); setActiveMenuId(1); }},
    {id: 2, name: 'Orders', onPress: () => { navigation.navigate('Orders'); setActiveMenuId(2); }},
    {id: 3, name: 'Notifications', onPress: () => { navigation.navigate('Notifications'); setActiveMenuId(3); }},
    {id: 4, name: 'LogIn', onPress: () => { navigation.navigate('SignIn'); setActiveMenuId(4); }},
  ];

  return (
    <View style={styles.container}>
      {menu.map(item => (
        <View key={item.id}>
          <Text
            style={[
              styles.wrapper,
              activeMenuId === item.id ? styles.activeMenu : null,
            ]}
            onPress={item.onPress}
          >
            {item.name}
          </Text>
        </View>
      ))}
    </View>
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
  activeMenu: {
    color: 'blue',
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: 'white',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
