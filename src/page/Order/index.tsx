import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

export default function Order() {
  const [countSalad, setCountSalad] = React.useState(0);
  const [countBacon, setCountBacon] = React.useState(0);
  const [countCheese, setCountCheese] = React.useState(0);
  const [countMeet, setCountMeet] = React.useState(0);
  return (
    <View>
      <Text style={styles.wrapper}>Order</Text>
      <View style={styles.imageCenter}>
        <Image
          style={styles.image}
          source={require('../../asset/image/burger.jpg')}
        />
      </View>

      <View style={styles.boxOrder}>
        <View style={styles.FlexRow}>
          <Text style={styles.textInBox}>Salad</Text>
          <View style={styles.buttonCount}>
            <Button
              title="-"
              color="#841584"
              onPress={() => setCountSalad(countSalad - 1)}
              disabled={countSalad === 0}
            />
            <Text style={styles.textButtonCount}>{countSalad}</Text>
            <Button
              title="+"
              color="#841584"
              onPress={() => setCountSalad(countSalad + 1)}
              disabled={countSalad === 10}
            />
          </View>
        </View>

        <View style={styles.FlexRow}>
          <Text style={styles.textInBox}>Bacon</Text>
          <View style={styles.buttonCount}>
            <Button
              title="-"
              color="#841584"
              onPress={() => setCountBacon(countBacon - 1)}
              disabled={countBacon === 0}
            />
            <Text style={styles.textButtonCount}>{countBacon}</Text>
            <Button
              title="+"
              color="#841584"
              onPress={() => setCountBacon(countBacon + 1)}
              disabled={countBacon === 10}
            />
          </View>
        </View>

        <View style={styles.FlexRow}>
          <Text style={styles.textInBox}>Cheese</Text>
          <View style={styles.buttonCount}>
            <Button
              title="-"
              color="#841584"
              onPress={() => setCountCheese(countCheese - 1)}
              disabled={countCheese === 0}
            />
            <Text style={styles.textButtonCount}>{countCheese}</Text>
            <Button
              title="+"
              color="#841584"
              onPress={() => setCountCheese(countCheese + 1)}
              disabled={countCheese === 10}
            />
          </View>
        </View>

        <View style={styles.FlexRow}>
          <Text style={styles.textInBox}>Meet</Text>
          <View style={styles.buttonCount}>
            <Button
              title="-"
              color="#841584"
              onPress={() => setCountMeet(countMeet - 1)}
              disabled={countMeet === 0}
            />
            <Text style={styles.textButtonCount}>{countMeet}</Text>
            <Button
              title="+"
              color="#841584"
              onPress={() => setCountMeet(countMeet + 1)}
              disabled={countMeet === 10}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonCheckOut}>
        <Button title="Check Out" color="#841584" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    fontSize: 30,
    marginBottom: 15,
    textAlign: 'center',
  },
  imageCenter: {
    margin: 'auto',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 15,
    borderRadius: 100,
  },
  boxOrder: {
    borderWidth: 1,
    height: 240,
    marginHorizontal: 20,
  },
  textInBox: {
    padding: 20,
  },
  buttonCheckOut: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonCount: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: '#841584',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  textButtonCount: {
    marginHorizontal: 10,
  },
  FlexRow: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
});
