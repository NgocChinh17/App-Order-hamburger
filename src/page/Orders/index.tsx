import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const itemOrder = [
  {
    id: 1,
    orderItem: [
      {name: 'salad', price: 1},
      {name: 'Meet', price: 2},
      {name: 'bacon', price: 3},
      {name: 'cheese', price: 4},
    ],
  },
  {
    id: 2,
    orderItem: [
      {name: 'salad', price: 1},
      {name: 'Meet', price: 2},
      {name: 'bacon', price: 3},
    ],
  },
  {
    id: 3,
    orderItem: [
      {name: 'salad', price: 1},
      {name: 'Meet', price: 2},
    ],
  },
  {
    id: 4,
    orderItem: [
      {name: 'salad', price: 1},
    ],
  },
  {
    id: 5,
    orderItem: [
      {name: 'Meet', price: 2},
      {name: 'bacon', price: 3},
      {name: 'cheese', price: 4},
    ],
  },
  {
    id: 6,
    orderItem: [
      {name: 'Meet', price: 2},
      {name: 'bacon', price: 3},
    ],
  },
];

interface OrderItem {
  name: string;
  price: number;
}
export default function Orders() {

  return (
    <ScrollView>
      <View>
        <Text style={styles.wrapper}>Orders</Text>
        {itemOrder.map((item: any) =>
          item.orderItem.map((order: OrderItem) => (
            <View style={styles.itemOrder}>
              <Text key={item.id}>
                {order.name} <Text>{order.price}</Text>
              </Text>
            </View>
          )),
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    fontSize: 30,
    textAlign: 'center',
  },
  itemOrder: {
    fontSize: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
  },
  priceItem: {
    justifyContent: 'space-between',
  },
});
