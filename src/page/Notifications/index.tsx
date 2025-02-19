import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const itemOrder = [
  {
    id: 1,
    title: 'You have new order',
    orderItem: [
      {name: 'salad', price: 1},
      {name: 'Meet', price: 2},
      {name: 'bacon', price: 3},
      {name: 'cheese', price: 4},
    ],
  },
  {
    id: 2,
    title: 'You have new order',
    orderItem: [
      {name: 'salad', price: 1},
      {name: 'Meet', price: 2},
      {name: 'bacon', price: 3},
    ],
  },
  {
    id: 3,
    title: 'You have new order',
    orderItem: [
      {name: 'salad', price: 1},
      {name: 'Meet', price: 2},
    ],
  },
  {
    id: 4,
    title: 'You have new order',
    orderItem: [{name: 'salad', price: 1}],
  },
  {
    id: 5,
    title: 'You have new order',
    orderItem: [
      {name: 'Meet', price: 2},
      {name: 'bacon', price: 3},
      {name: 'cheese', price: 4},
    ],
  },
  {
    id: 6,
    title: 'You have new order',
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
      <View style={styles.wrapper}>
        <Text style={styles.title}>Notifications</Text>
        {itemOrder.map(item => (
          <View key={item.id} style={styles.orderWrapper}>
            <View>
              <Text style={styles.textTitle}>{item.title}</Text>
              <View style={styles.orderItemsWrapper}>
                {item.orderItem.map((order: OrderItem) => (
                  <View key={order.name} style={styles.orderItem}>
                    <Text style={styles.itemText}>
                      {order.name}:{' '}
                      <Text style={styles.priceText}>({order.price})</Text>
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
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
  },
  orderItemsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  orderItem: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 20,
  },
  priceText: {
    fontSize: 18,
    color: '#00aaff',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00aaff',
  },
});
