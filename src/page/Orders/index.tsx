import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const itemOrder = [
  {
    id: 1,
    orderItem: [
      {name: 'salad', price: 1},
      {name: 'Meet', price: 2},
      {name: 'bacon', price: 3},
      {name: 'cheese', price: 4},
    ],
    totalPrice: 10,
  },
  {
    id: 2,
    orderItem: [
      {name: 'salad', price: 1},
      {name: 'Meet', price: 2},
      {name: 'bacon', price: 3},
    ],
    totalPrice: 6,
  },
  {
    id: 3,
    orderItem: [
      {name: 'salad', price: 1},
      {name: 'Meet', price: 2},
    ],
    totalPrice: 3,
  },
  {
    id: 4,
    orderItem: [{name: 'salad', price: 1}],
    totalPrice: 1,
  },
  {
    id: 5,
    orderItem: [
      {name: 'Meet', price: 2},
      {name: 'bacon', price: 3},
      {name: 'cheese', price: 4},
    ],
    totalPrice: 9,
  },
  {
    id: 6,
    orderItem: [
      {name: 'Meet', price: 2},
      {name: 'bacon', price: 3},
    ],
    totalPrice: 5,
  },
];

interface OrderItem {
  name: string;
  price: number;
}

type RootStackParamList = {
  Notifications: undefined;
};

export default function Orders() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Orders</Text>
        {itemOrder.map(item => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}
            key={item.id}>
            <View key={item.id} style={styles.orderWrapper}>
              <View style={styles.itemsContainer}>
                {item.orderItem.map((order: OrderItem) => (
                  <View key={order.name} style={styles.itemOrder}>
                    <Text style={styles.itemText}>
                      {order.name}:{' '}
                      <Text style={styles.priceText}>${order.price}</Text>
                    </Text>
                  </View>
                ))}
              </View>
              <Text style={styles.totalPrice}>
                Total: <Text style={styles.priceText}>${item.totalPrice}</Text>
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  orderWrapper: {
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  itemsContainer: {
    flex: 1,
  },
  itemOrder: {
    marginBottom: 10,
  },
  itemText: {
    fontSize: 20,
  },
  priceText: {
    fontSize: 18,
    color: '#00aaff',
  },
  totalPrice: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'right',
  },
});
